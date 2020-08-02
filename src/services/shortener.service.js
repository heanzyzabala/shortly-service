const urlModel = require('../models/url.model');
const codeSupplier = require('../code.supplier');

module.exports = {
    async generate(url) {
        return urlModel.save(codeSupplier.get(), url);
    },
    async get(code) {
        const result = await urlModel.get(code);
        return {
            url: result == null ? null : result.url,
        };
    },
};
