const express = require('express');

const router = express.Router();
router.use('/shortly', require('./shortener.route'));

module.exports = router;
