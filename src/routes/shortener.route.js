const express = require('express');

const router = express.Router();

const shortener = require('../services/shortener.service');
const urlSchema = require('../schemas/url');

router.post('/api/shorten', async (req, res) => {
    const { url } = req.body;
    const isValid = await urlSchema.isValid({ url });
    if (!isValid) {
        return res.status(422).json({ error: 'Invalid URL' });
    }
    const result = await shortener.generate(url);
    return res.status(201).json({ code: result.code });
});

router.get('/:code', async (req, res) => {
    const { url } = await shortener.get(req.params.code);
    if (!url) {
        return res.status(404).json({ error: 'Not Found' });
    }
    return res.redirect(url);
});

module.exports = router;
