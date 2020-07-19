const { nanoid } = require('nanoid');
const db = require('monk')('localhost/shortly-db');
const ShortenerServive = require('../services/shortenerService');

module.exports = new ShortenerServive(db.get('urls'), () => nanoid(6));
