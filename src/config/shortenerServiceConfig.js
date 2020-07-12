const ShortenerServive = require('../services/shortenerService');
const redisClient = require('./redis');
const { nanoid } = require('nanoid');

module.exports = new ShortenerServive(redisClient, () => nanoid(6));