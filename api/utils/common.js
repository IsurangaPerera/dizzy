const filters = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  mongoOperators: /\b(gt|gte|lt|lte|in)\b/g,
};

const getStrFromQuery = (query) => {
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((field) => delete query[field]);
  let queryStr = JSON.stringify(query);
  return queryStr.replace(filters.mongoOperators, (match) => `$${match}`);
};

exports.filters = filters;
exports.getStrFromQuery = getStrFromQuery;
