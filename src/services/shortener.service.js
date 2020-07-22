const urlModel = require('../config/url.model');
const codeSupplier = require('../config/code.supplier');

module.exports = {
    generate: async (url) => urlModel.save({ code: codeSupplier.get(), url }),
    get: async (code) => urlModel.get({ code }),
};
