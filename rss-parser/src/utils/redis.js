const { createClient } = require('redis');

const client = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: 6379,
  },
});

/**
 * Establish connection with redis server.
 */
exports.establishRedisConnection = async () => client.connect();

/**
 * Get cache from redis.
 *
 * @param {string} key key to get from redis.
 *
 * @returns {Promise<any>} value of the key.
 */
exports.getCache = async (key) => JSON.parse(await client.get(key));

/**
 * Cache a key value pair  in redis with  expiry.
 *
 * @param {object} params Parameters object.
 * @param {string} params.key Key name.
 * @param {number} params.seconds Expiry time in seconds.
 * @param {object} params.value Value of cache.
 *
 */
exports.saveTempCache = async ({ key, seconds, value }) =>
  client.setEx(key, seconds, JSON.stringify(value));
