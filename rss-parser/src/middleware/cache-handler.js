const { getCache } = require('../utils/redis');

/**
 * RSS feed Middleware for handling cached data.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Gives the controls for next middleware.
 */
exports.rssCache = async (req, res, next) => {
  const { path } = req.route;
  const { method } = req.route.stack[0];
  if (path === '/' && method === 'get') {
    const cached = await getCache(`rss_feed`);
    if (cached) {
      console.log('cache');
      res.render('job-rss', { jobList: cached });
    }
  } else next();
};
