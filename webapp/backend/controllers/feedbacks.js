const asyncHandler = require("../middleware/async");
const Feedback = require("../models/Feedback");

// @desc      Get feedbacks of signed in user
// @route     GET /api/v1/me/feedbacks
// @route     GET /api/v1/feedbacks
// @access    Private
const getFeedbacks = asyncHandler(async (request, response, next) => {
  if (request.reRoute && request.reRoute.noMongoResults) {
    const feedbacks = await Feedback.find({ user: request.user.id });

    return response.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } else {
    response.status(200).json(response.mongoResults);
  }
});

// @desc      Add a feedback for signed in user
// @route     POST /api/v1/me/feedbacks
// @route     POST /api/v1/feedbacks
// @access    Private
const addFeedback = asyncHandler(async (request, response, next) => {
  request.body.user = request.user.id;
  const feedback = await Feedback.create(request.body);
  feedback.user = undefined;

  response.status(201).json({
    success: true,
    data: feedback,
  });
});

exports.getFeedbacks = getFeedbacks;
exports.addFeedback = addFeedback;
