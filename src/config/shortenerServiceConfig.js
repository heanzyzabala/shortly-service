const ShortenerServive = require('../services/shortenerService');
const redisClient = require('./redis');
const codeSupplier = () => {
    return Math.random().toString(36).substring(2, 8);
}
let port = process.env.PORT;
port = port != '80' ? `:${port}` : '';
const host = `${process.env.HOST}${port}`;
module.exports = new ShortenerServive(redisClient, host, codeSupplier);