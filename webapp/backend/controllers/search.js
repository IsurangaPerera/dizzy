const asyncHandler = require("../middleware/async");

// @desc      Search crawled webpages in es
// @route     GET /api/v1/search/web
// @access    Private
const web = asyncHandler(async (request, response, next) => {
  response.status(200).json(response.webResults);
});

// @desc      Search crawled wallets in es
// @route     GET /api/v1/search/wallet
// @access    Private
const wallet = asyncHandler(async (request, response, next) => {
  response.status(200).json(response.walletResults);
});


exports.web = web;
exports.wallet = wallet;
