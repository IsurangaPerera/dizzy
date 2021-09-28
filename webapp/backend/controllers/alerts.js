const asyncHandler = require("../middleware/async");
const Alert = require("../models/Alert");

// @desc      Get alerts of signed in user
// @route     GET /api/v1/me/alerts
// @route     GET /api/v1/alerts
// @access    Private
const getAlerts = asyncHandler(async (request, response, next) => {
  if (request.reRoute && request.reRoute.noMongoResults) {
    const alerts = await Alert.find({ user: request.user.id });

    return response.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts,
    });
  } else {
    response.status(200).json(response.mongoResults);
  }
});

// @desc      Add an alert for signed in user
// @route     POST /api/v1/me/alerts
// @route     POST /api/v1/alerts
// @access    Private
const addAlert = asyncHandler(async (request, response, next) => {
  request.body.user = request.user.id;
  const alert = await Alert.create(request.body);
  alert.user = undefined;

  response.status(201).json({
    success: true,
    data: alert,
  });
});

// @desc      Delete an alert for signed in user
// @route     DELETE /api/v1/alerts/:id
// @access    Private
const deleteAlert = asyncHandler(async (request, response, next) => {
  const alert = await Alert.findById(request.params.id);
  if (!alert) {
    return next(
      new ErrorResponse(`No alert with the id of ${request.params.id}`, 404)
    );
  }
  await alert.remove();

  response.status(200).json({
    success: true,
    data: {},
  });
});

exports.getAlerts = getAlerts;
exports.addAlert = addAlert;

exports.deleteAlert = deleteAlert;
