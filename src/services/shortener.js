// Didn't destructured for testing purposes
// See: https://github.com/sinonjs/sinon/issues/1538
// Useful links:
//  https://github.com/sinonjs/sinon/pull/2049
//  https://github.com/sinonjs/sinon/blob/8683af388a2b46b2b3e7764fe6fcfe91b8543e35/docs/_howto/link-seams-commonjs.md
const models = require('../models');

const urlModel = models.url;

const utilities = require('../utilities');

module.exports = {
    async generate(url) {
        return urlModel.create({ code: utilities.supply(), url });
    },
    async get(code) {
        const result = await urlModel.findOne({ code });
        return {
            url: result == null ? null : result.url,
        };
    },
};
