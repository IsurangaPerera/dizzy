const { getStrFromQuery } = require("../utils/common");

const mongoResults = (model, populate) => async (request, response, next) => {
  // Reroute
  if (request.reRoute && request.reRoute.noMongoResults) {
    next();
  }

  // Find
  const queryStr = getStrFromQuery({ ...request.query });
  let query = model.find({ ...JSON.parse(queryStr), user: request.user.id });

  // Select
  if (request.query.select) {
    const fields = request.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Sort
  if (request.query.sort) {
    const sortBy = request.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Skip
  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  query = query.skip(startIndex).limit(limit);

  const endIndex = page * limit;
  const total = await model.countDocuments(JSON.parse(queryStr));
  const pagination = {};

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

  // Populate
  if (populate) {
    query = query.populate(populate);
  }

  // Execute
  const results = await query;

  response.mongoResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

module.exports = mongoResults;
