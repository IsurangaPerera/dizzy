const es = require('../services/es');

const computeStats = async () => {
  const data = {
    count: {},
  };

  let result = await es.cat.count({
    index: process.env.ES_INDEX,
    format: 'json',
  });
  data.count.pages = result.body[0].count;

  result = await es.search({
    index: process.env.ES_INDEX,
    size: 0,
    body: {
      aggs: {
        domainCount: {
          terms: {
            field: 'data.info.domain',
          },
        },
      },
    },
  });

  console.log(result.body);
};

module.exports = computeStats;
