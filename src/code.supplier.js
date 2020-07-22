const { nanoid } = require('nanoid');

module.exports = {
    get() { return nanoid(6); },
};
