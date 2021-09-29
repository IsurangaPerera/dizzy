const asyncHandler = require('../middleware/async');

// @desc      Search crawled webpages in es
// @route     GET /api/v1/search/web
// @access    Private
const web = asyncHandler(async (request, response, next) => {
  response.status(200).json(response.webResults);
});

exports.web = web;
