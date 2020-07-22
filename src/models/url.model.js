const urls = require('monk')('localhost/shortly-db').get('urls');

module.exports = {
    async save(code, url) { return urls.insert(code, url); },
    async get(code) { return urls.findOne(code); },
};
