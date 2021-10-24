const es = require('../services/es');
const Statistic = require('../models/Statistic');

const MAX_AVAILABLE_DOMAINS = 30000;

const computeStats = async () => {
  console.log(`[cron:computeStats] Server running a scheduled job`.magenta);

  try {
    await Statistic.deleteMany({});
  } catch (error) {
    console.log(`[cron:computeStats] Error while deleting previous record`.red);
    console.log(error);
  }

  const index = {};
  try {
    index.page = await getPageCount();
    index.domain = await getDomainCount();
    index.crypto = await getCryptoCount();
    await Statistic.create({
      type: 'index',
      computed: {
        index
      },
    });
  } catch (error) {
    console.log(`[cron:computeStats] Error while computing stats`.red);
    console.log(error);
  }

  try {
    const domains = await getDomainStatus();
    await Statistic.create({
      type: 'domain',
      computed: {
        domains
      },
    });
  } catch (error) {
    console.log(`[cron:computeStats] Error while computing domain availability`.red);
    console.log(error);
  }
};

const getPageCount = async () => {
  let result = await es.search({
    index: [process.env.ES_CRAWLER_INDEX, process.env.ES_RECRAWLER_INDEX],
    size: 0,
    body: {
      aggs: {
        pageCount: {
          cardinality: {
            field: 'data.info.url',
          },
        },
      },
    },
  });
  return result.body.aggregations.pageCount.value;
};

const getDomainCount = async () => {
  let result = await es.search({
    index: process.env.ES_CRAWLER_INDEX,
    size: 0,
    body: {
      aggs: {
        domainCount: {
          cardinality: {
            field: 'data.info.domain',
          },
        },
      },
    },
  });
  return result.body.aggregations.domainCount.value;
};

const getCryptoCount = async () => {
  let result = await es.search({
    index: [process.env.ES_CRAWLER_INDEX, process.env.ES_RECRAWLER_INDEX],
    size: 0,
    body: {
      aggs: {
        btcAddressCount: {
          cardinality: {
            field: 'data.info.cryptocurrency.btc.address.keyword',
          },
        },
      },
    },
  });
  return {
    btc: result.body.aggregations.btcAddressCount.value,
  };
};

const getDomainStatus = async () => {
  let result = await es.search({
    index: process.env.ES_HEALTHCHECK_INDEX,
    size: 0,
    body: {
      query: {
        range: {
          timestamp: {
            gte: 'now-30d/d',
            lt: 'now/d'
          }
        }
      },
      aggs: {
        availability: {
          date_histogram: {
            field: 'timestamp',
            interval: '1d',
            min_doc_count: 0
          },
          aggs: {
            domains: {
              terms: {
                field: 'domain.keyword',
                size: MAX_AVAILABLE_DOMAINS
              }
            }
          }
        }
      }
    },
  });

  const domains = {};
  const buckets = result.body.aggregations.availability.buckets;
  for (const bucket of buckets) {
    const timestamp = bucket.key;
    for (const domainEntry of bucket.domains.buckets) {
      const key = domainEntry.key.split('.')[0];
      if(key in domains) {
        domains[key].lastChecked = timestamp;
        domains[key].availability += 1;
      } else {
        domains[key] = { lastChecked: timestamp, availability: 1 };
      }
    }
  }

  for (const domain of Object.keys(domains)) {
    const avail = domains[domain].availability;
    domains[domain].availability = Math.round((avail / buckets.length) * 100);
  }

  return domains;
};

module.exports = computeStats;
