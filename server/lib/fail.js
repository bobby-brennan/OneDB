const fail = module.exports = function(message, statusCode) {
  let err = new Error(message);
  if (statusCode) err.statusCode = statusCode;
  return Promise.reject(err);
}


