const { AsyncRouter } = require('express-async-router');
const rssParserRouter = require('./rss-parser.rout');

const router = AsyncRouter();

router.use('/rss', rssParserRouter);

module.exports = router;
