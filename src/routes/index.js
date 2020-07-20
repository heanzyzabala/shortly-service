const express = require('express');
const shortenerRouter = require('./shortener');

const router = express.Router();
router.use('/shortly', shortenerRouter);

module.exports = router;
