/**
 * One response format for all requests.
 *
 * @param {object} res  Response object.
 * @param {string} message Message to be sent.
 * @param {boolean} success Requests success or not.
 *
 * @return {object} Formatted response.
 */
exports.formatResponse = (res, message, success = true) => ({
  data: res,
  msg: message,
  success,
});
