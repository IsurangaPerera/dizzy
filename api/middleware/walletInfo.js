const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
// const es = require("../services/es");
// const moment = require("moment");

const walletInfo = asyncHandler(async (request, response, next) => {
  const { id } = request.query;
  if (!id) {
    return next(new ErrorResponse('Please provide the wallet Id', 400));
  }

  /*const results = await es.search({
    index: process.env.ES_INDEX,
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

  const hits = results.body.hits.hits
    .map((hit) => {
      return {
        id: hit._id,
        source: hit._source.source,
        title: hit._source.info.tags.cryptocurrency.address.btc,
        crawledAt: moment(hit._source.timestamp).utc().toISOString(true),
      };
    });*/

  response.walletInfo = {
    success: true,
    data: {
      links: [
        { id: '1', name: 'CrimeNetwork.co' },
        { id: '2', name: 'GermanPlazaMarket' },
        { id: '3', name: 'GreenRoadMarket' },
        { id: '4', name: 'StrongCoin-com-fee' },
        { id: '5', name: 'FaucetBox.com' },
        { id: '6', name: 'AlphaBayMarket' },
        { id: '7', name: 'BitLaunder.com' },
        { id: '8', name: 'Genesis-Mining.com' },
        { id: '9', name: 'CryptoPay.me' },
        { id: '10', name: 'CoinRoyale.com' },
      ],
      summary: [
        { name: 'Name', value: 'BitcoinVideosCasino.com' },
        { name: 'Category', value: 'Services' },
        { name: 'Dizzy Score', value: 'N/A' },
        { name: 'Volume (#txes)', value: '600' },
        { name: 'Size (#addrs)', value: '1200' },
        { name: 'Balance (₿)', value: '600' },
        { name: 'Total Sent (₿)', value: '600' },
        { name: 'Total Received (₿)', value: '600' },
      ],
      moneyFlow: {
        nodes: [
          { id: 'Black Market', color: 'hsl(156, 70%, 50%)' },
          { id: 'Mining', color: 'hsl(74, 70%, 50%)' },
          { id: ' ', color: 'hsl(237, 70%, 50%)' },
          { id: 'Mixing Service', color: 'hsl(341, 70%, 50%)' },
          { id: 'Regulated Exchange', color: 'hsl(30, 70%, 50%)' },
          { id: 'Unknown', color: 'hsl(301, 70%, 50%)' },
          { id: 'Unknown ', color: 'hsl(201, 10%, 50%)' },
          { id: 'Black Market ', color: 'hsl(101, 30%, 50%)' },
          { id: 'User', color: 'hsl(201, 30%, 50%)' },
        ],
        links: [
          { source: 'Black Market', target: ' ', value: 136 },
          { source: 'Mining', target: ' ', value: 148 },
          { source: 'Mixing Service', target: ' ', value: 105 },
          { source: 'Regulated Exchange', target: ' ', value: 101 },
          { source: 'Unknown', target: ' ', value: 33 },
          { source: ' ', target: 'User', value: 133 },
          { source: ' ', target: 'Black Market ', value: 83 },
          { source: ' ', target: 'Unknown ', value: 31 },
        ],
      },
    },
  };

  if (
    id === '6ca4a6605be5da279a94cb735c462e1d8da736d023bdcddf1880e8720dccabd5'
  ) {
    response.walletInfo = {
      success: true,
      data: {
        links: [
          { id: '1', name: 'CrimeNetwork.co' },
          { id: '2', name: 'GermanPlazaMarket' },
          { id: '3', name: 'GreenRoadMarket' },
          { id: '4', name: 'StrongCoin-com-fee' },
          { id: '5', name: 'FaucetBox.com' },
          { id: '6', name: 'AlphaBayMarket' },
          { id: '7', name: 'BitLaunder.com' },
          { id: '8', name: 'Genesis-Mining.com' },
          { id: '9', name: 'CryptoPay.me' },
          { id: '10', name: 'CoinRoyale.com' },
        ],
        summary: [
          { name: 'Name', value: 'WannaCry' },
          { name: 'Category', value: 'Ransomware' },
          { name: 'Dizzy Score', value: '0.01' },
          { name: 'Volume (#txes)', value: '405' },
          { name: 'Size (#addrs)', value: '1200' },
          { name: 'Balance (₿)', value: '0.02' },
          { name: 'Total Sent (₿)', value: '12.87' },
          { name: 'Total Received (₿)', value: '12.89' },
        ],
        moneyFlow: {
          nodes: [
            { id: 'Black Market', color: 'hsl(156, 70%, 50%)' },
            { id: ' ', color: 'hsl(237, 70%, 50%)' },
            { id: 'Regulated Exchange', color: 'hsl(241, 60%, 70%)' },
            { id: 'Mixing Service', color: 'hsl(341, 70%, 50%)' },
            { id: 'Unknown', color: 'hsl(301, 70%, 50%)' },
            { id: 'Unregulated Exchange', color: 'hsl(401, 54%, 50%)' },
            { id: 'Gambling', color: 'hsl(201, 14%, 70%)' },
            { id: 'Mixing', color: 'hsl(121, 44%, 70%)' },
            { id: 'Black Market ', color: 'hsl(171, 64%, 70%)' },
          ],
          links: [
            { source: 'Unknown', target: ' ', value: 436 },
            { source: 'Mixing', target: ' ', value: 233 },
            { source: 'Unregulated Exchange', target: ' ', value: 133 },
            { source: 'Black Market ', target: ' ', value: 83 },

            { source: ' ', target: 'Black Market', value: 183 },
            { source: ' ', target: 'Mixing Service', value: 331 },
            { source: ' ', target: 'Regulated Exchange', value: 231 },
            { source: ' ', target: 'Gambling', value: 131 },
          ],
        },
      },
    };
  }
  next();
});

module.exports = walletInfo;
