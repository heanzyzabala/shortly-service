const express = require('express');
const router = express.Router();

const shortenerService = require('../config/shortenerServiceConfig');

router.post('/shorten', (req, res) => {
    shortenerService.generate(req.body.url, (error, result, code) => {
        return res.status(201).json({ code });
    });
});

router.get('/:code', (req, res) => {
    shortenerService.get(req.params.code, (err, result) => {
        return res.redirect(result);
    });
});

module.exports = router;