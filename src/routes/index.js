const express = require('express');

const router = express.Router();
router.use('/', require('./shortener.route'));

module.exports = router;
