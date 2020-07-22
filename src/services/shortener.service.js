const urlModel = require('../models/url.model');
const codeSupplier = require('../code.supplier');

module.exports = {
    async generate(url) { return urlModel.save({ code: codeSupplier.get(), url }); },
    async get(code) { return urlModel.get({ code }); },
};
