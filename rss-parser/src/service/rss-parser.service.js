const { XMLParser } = require('fast-xml-parser');
const axios = require('axios');
const { getTitleAndLocation } = require('../utils/rss_parser');
const { saveTempCache } = require('../utils/redis');

/**
 * Render rss feed template.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.getRssFeedTemplate = async (req, res) => {
  const { RSS_URL } = process.env;
  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const feed = await axios.get(RSS_URL);
  const feedParsed = parser.parse(feed.data);
  const { item: jobList } = feedParsed.rss.channel;
  const response = getTitleAndLocation(jobList);
  await saveTempCache({
    key: 'rss_feed',
    seconds: 300 * 6,
    value: response,
  });

  res.render('job-rss', { jobList: response });
};
