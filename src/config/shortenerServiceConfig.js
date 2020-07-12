const ShortenerServive = require('../services/shortenerService');
const redisClient = require('./redis');
const codeSupplier = () => {
    return Math.random().toString(36).substring(2, 8);
}
module.exports = new ShortenerServive(redisClient, codeSupplier);