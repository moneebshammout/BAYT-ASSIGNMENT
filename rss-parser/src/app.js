require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = require('./routes');
const errorHandler = require('./middleware/error-handler');
const { establishRedisConnection } = require('./utils/redis');

establishRedisConnection();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(
  '/',
  createProxyMiddleware({
    target: `http://localhost:${PORT}/rss_parser`,
    changeOrigin: true,
    pathRewrite: {
      '^/': '',
    },
  }),
);
app.use(router);

app.all('*', (req, res) => {
  res.status(404).send('You Arrived No Where 😁');
});

module.exports = { app };
