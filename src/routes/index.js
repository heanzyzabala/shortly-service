const express = require('express');

const router = express.Router();
router.use('/api', require('./shortener'));

module.exports = router;
