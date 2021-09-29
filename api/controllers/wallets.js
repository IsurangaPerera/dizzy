const asyncHandler = require("../middleware/async");

// @desc      Get wallet information
// @route     GET /api/v1/info/wallet
// @access    Private
const wallet = asyncHandler(async (request, response, next) => {
  response.status(200).json(response.walletInfo);
});

exports.wallet = wallet;
