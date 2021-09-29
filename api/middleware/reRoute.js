const reRoute = (router, options) => async (request, response, next) => {
  request.reRoute = {
    noMongoResults: false,
    ...options,
  };
  router(request, response, next);
};

module.exports = reRoute;
