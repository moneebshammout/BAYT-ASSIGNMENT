const Parser = require('rss-parser');
const {getTitleAndLocation} = require('../utils/rss_parser');

/**
 * Render rss feed template.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.getRssFeedTemplate = async (req, res) => {
  const { RSS_URL } = process.env;
  const parser = new Parser();
  console.time('Time to parse RSS feed:')
  const feed = await parser.parseURL(RSS_URL);
  console.timeEnd('Time to parse RSS feed:')
  res.send(getTitleAndLocation(feed.items));
  // res.send(jobList);
  // res.render('rss-feed.template.js', { feed });
};
