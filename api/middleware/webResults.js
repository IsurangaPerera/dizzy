const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const es = require('../services/es');
const moment = require('moment');

const webResults = asyncHandler(async (request, response, next) => {
  const { query } = request.query;
  if (!query) {
    return next(new ErrorResponse('Please provide a search query', 400));
  }

  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = await es.search({
    index: process.env.ES_CRAWL_INDEX,
    from: startIndex,
    size: limit,
    body: {
      query: {
        query_string: {
          query: `_exists_:data.info.domain_info.safety AND _exists_:data.info.title AND (${query}~${query.length/3})`
        }
      },
      aggs: {
        mirrorSize: {
          terms: { field: 'data.info.domain_info.mirror.group', size:20000 },
          aggs : { domains: { cardinality : { field : 'data.info.domain' } } },
        },
      },
      _source: ['data.info.title', 'data.info.url', 'data.info.domain_info', 'data.summary', 'data.timestamp']
    },
  });

  const total = results.body.hits.total.value;
  const mirrorMap = Object.assign({}, ...results.body.aggregations.mirrorSize.buckets
      .map((x) => ({[x.key]: x.domains.value})));

  const hits = results.body.hits.hits.map((hit) => {
    const domainInfo = hit._source.data.info.domain_info;
    const safety = domainInfo.safety.is_safe? 'benign' : 'malicious';
    const btcAddresses = domainInfo.attribution? domainInfo.attribution.btc : [];

    return {
      id: hit._id,
      url: hit._source.data.info.url,
      title: hit._source.data.info.title,
      crawledAt: moment(hit._source.data.timestamp).utc().toISOString(true),
      body: hit._source.data.summary || hit._source.data.info.title,
      info: [
        {
          title: 'Safety',
          text: safety,
        },
        {
          title: 'Category',
          text: domainInfo.category.type,
        },
        {
          title: 'Mirror Group Size',
          text:  mirrorMap[domainInfo.mirror.group],
        },
        {
          title: 'Crypto Addresses',
          text: `${btcAddresses.length} (Bitcoin)`,
        },
      ],
    };
  });

  const pagination = {};
  if (hits.length > 0) {
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }
  }

  response.webResults = {
    success: true,
    count: hits.length,
    pagination,
    data: hits,
  };

  next();
});

module.exports = webResults;
