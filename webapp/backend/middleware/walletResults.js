const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const es = require("../config/es");
const moment = require("moment");

const walletResults = asyncHandler(async (request, response, next) => {
  const { query } = request.query;
  if (!query) {
    return next(new ErrorResponse("Please provide a search query", 400));
  }

  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = await es.search({
    index: process.env.ES_INDEX,
    from: startIndex,
    size: limit,
    body: {
      query: {
        bool: {
          must: {
            multi_match: {
              query: query,
              fields: ["info.tags.cryptocurrency.address.btc", "summary", "info.tags.abuse.report.type",
                "info.tags.abuse.report.abuser", "info.tags.abuse.report.description"],
              operator: "or",
            },
          },
          filter: {
            exists: {
              field: "info.tags.cryptocurrency.address.btc"
            }
          }
        }
      }
    }
  });

  const total = results.body.hits.total.value;
  const hits = results.body.hits.hits
    .map((hit) => {
      return {
        id: hit._id,
        source: hit._source.source,
        title: hit._source.info.tags.cryptocurrency.address.btc,
        crawledAt: moment(hit._source.timestamp).utc().toISOString(true),
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

  response.walletResults = {"success":true,"count":2,"pagination":{},"data":[{"id":"6ca4a6605be5da279a94cb735c462e1d8da736d023bdcddf1880e8720dccabd4","name":"BitcoinVideosCasino.com","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume":"3245","size":"1270","info":[{"title":"Safety","text":"N/A"},{"title":"Category","text":"N/A"},{"title":"Toshi Rank","text":"N/A"}]},{"id":"8ca4a6605be5da279a94cb735c462e1d8da736d023bdcddf1880e8720dccabd4","name":"SatoshiDice.com","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume": "242342","size":"3232","info":[{"title":"Safety","text":"N/A"},{"title":"Category","text":"N/A"},{"title":"Toshi Rank","text":"N/A"}]}]};

  if(query.toUpperCase() === "wannacry".toUpperCase() ||
      query.toUpperCase() === "12byutpYf1xpH8fR4qBj4833x2t94rSr8X".toUpperCase()) {
      response.walletResults = {"success":true,"count":1,"pagination":{},
        "data":[
            {"id":"6ca4a6605be5da279a94cb735c462e1d8da736d023bdcddf1880e8720dccabd5","name":"WannaCry","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume":"3244345","size":"561270","info":[{"title":"Safety","text":"Malicious"},{"title":"Category","text":"Ransomware"},{"title":"Toshi Rank","text":"0.95"}]},
            {"id":"3ab4a6605be5da279a94cb735c876e6d8da736d023bdcddf1880e8720dccabd5","name":"AlphaBayMarket","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume":"478335","size":"98970","info":[{"title":"Safety","text":"Benign"},{"title":"Category","text":"Marketplace"},{"title":"Toshi Rank","text":"0.80"}]},
            {"id":"8bb4a6605be5da976b94cb735c462e1d8da736d023bdcddf1880e8720dccabd5","name":"GreenRoadMarket","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume":"8946783","size":"432686","info":[{"title":"Safety","text":"Benign"},{"title":"Category","text":"Marketplace"},{"title":"Toshi Rank","text":"0.80"}]},
            {"id":"5ab766605be5da279a94cb735c462e1d8da736d023bdcddf1880e8720dccaaa7","name":"BitLaunder.com","clusteredAt":"2020-10-27T22:37:24.256+00:00","volume":"324324","size":"634323","info":[{"title":"Safety","text":"Benign"},{"title":"Category","text":"Mixing Service"},{"title":"Toshi Rank","text":"0.64"}]}
            ]
      };
  }
  next();
});

module.exports = walletResults;
