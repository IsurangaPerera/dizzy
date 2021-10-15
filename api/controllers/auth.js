const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const sendTokenResponse = require('../utils/sendTokenResponse');

// @desc      Sign in a user
// @route     POST /api/v1/auth/signin
// @access    Public
const signin = asyncHandler(async (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return next(new ErrorResponse('Please provide login credentials', 400));
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  const match = await user.matchPassword(password);
  if (!match) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, response);
});

// @desc      Sign out a user and clears the cookie
// @route     GET /api/v1/auth/signout
// @access    Public
const signout = asyncHandler(async (request, response, next) => {
  response.cookie('token', 'none', {
    expires: new Date(
      Date.now() + parseInt(process.env.LOGOUT_COOKIE_EXPIRE_MS, 10)
    ),
    httpOnly: true,
  });

  response.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Sign up a new user
// @route     POST /api/v1/auth/signup
// @access    Public
const signup = asyncHandler(async (request, response, next) => {
  const user = await User.create(request.body);

  response.status(201).json({
    success: true,
    data: {},
  });
});

exports.signin = signin;
exports.signout = signout;
exports.signup = signup;
