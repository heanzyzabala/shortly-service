const express = require('express');
const shortenerRouter = require('./shortener');

const router = express.Router();
router.use('/shorten', shortenerRouter);

module.exports = router;