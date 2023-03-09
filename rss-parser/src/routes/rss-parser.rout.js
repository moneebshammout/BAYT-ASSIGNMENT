const { AsyncRouter } = require('express-async-router');
const { getRssFeedTemplate } = require('../service/rss-parser.service');

const router = AsyncRouter();

router.get('/', getRssFeedTemplate);

module.exports = router;
