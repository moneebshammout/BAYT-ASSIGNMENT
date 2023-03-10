const { AsyncRouter } = require('express-async-router');
const { getRssFeedTemplate } = require('../service/rss-parser.service');
const { rssCache } = require('../middleware/cache-handler');

const router = AsyncRouter();

router.get('/', rssCache, getRssFeedTemplate);

module.exports = router;
