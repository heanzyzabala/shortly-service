const express = require('express');
const shortenerRouter = require('./shortener');

const router = express.Router();
router.use('/api', shortenerRouter);

module.exports = router;
