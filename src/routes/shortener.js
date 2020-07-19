const express = require('express');

const router = express.Router();

const shortenerService = require('../config/shortenerServiceConfig');
const urlSchema = require('../schemas/url');

router.post('/shorten', async (req, res) => {
    const url = req.body.url;
    const isValid = await urlSchema.isValid({ url });
    if(!isValid) {
        return res.status(422).json({ 'error': 'Invalid URL' });
    }
    shortenerService.generate(req.body.url, (err, result, code) => {
        if (err) {
            console.error(JSON.stringify(err));
            return res.status(500).json({ 'error': 'Internal Server Error' });
        }
        return res.status(201).json({ code });
    });
});

router.get('/:code', (req, res) => {
    shortenerService.get(req.params.code, (err, value) => {
        if (err) {
            console.error(JSON.stringify(err));
            return res.status(500).json({ 'error': 'Internal Server Error' });
        }
        if (!value) {
            return res.sendStatus(404);
        }
        return res.status(200).json({ url: value });
    });
});

module.exports = router;