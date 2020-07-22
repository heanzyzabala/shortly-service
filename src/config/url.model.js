const urls = require('monk')('localhost/shortly-db').get('urls');

module.exports = {
    async save(code, url) { urls.insert({ code, url }); },
    async get(code) { urls.findOnce({ code }); },
};
