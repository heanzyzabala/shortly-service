const express = require('express');
const router = express.Router();

const shortenerService = require('../config/shortenerServiceConfig');

router.post('/shorten', (req, res) => {
    shortenerService.generate(req.body.url, (err, result, shortenedUrl) => {
        if (err) {
            console.error(JSON.stringify(err));
            return res.status(500).json({ 'error': 'Internal Server Error' });
        }
        return res.status(201).json({ url: shortenedUrl });
    });
});

router.get('/:code', (req, res) => {
    shortenerService.get(req.params.code, (err, result) => {
        if (err) {
            console.error(JSON.stringify(err));
            return res.status(500).json({ 'error': 'Internal Server Error' });
        }
        if (!result) {
            return res.sendStatus(404);
        }
        return res.redirect(result);
    });
});

module.exports = router;