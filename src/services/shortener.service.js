const urlModel = require('../models/url.model');
const codeSupplier = require('../code.supplier');

module.exports = {
    async generate(url) {
        return urlModel.create({ code: codeSupplier.get(), url });
    },
    async get(code) {
        const result = await urlModel.findOne({ code });
        return {
            url: result == null ? null : result.url,
        };
    },
};
