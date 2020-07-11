const express = require('express');
const router = express.Router();

const shortenerService = require('../config/shortenerServiceConfig');

router.post('/', (req, res) => {
    const url = req.body.url;
    shortenerService.shorten(url, (error, result, code) => {
        return res.status(201).json({ code });
    });
});

module.exports = router;