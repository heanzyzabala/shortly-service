const express = require('express');

const router = express.Router();
const validator = require('validator');

const shortener = require('../services/shortener.service');
const { sanitize } = require('../sanitizer');

router.post('/shorten', async (req, res) => {
    const { url } = req.body;
    const isValid = validator.isURL(url);
    if (!isValid) {
        return res.status(422).json({ error: 'Invalid URL' });
    }

    const result = await shortener.generate(sanitize(url));
    return res.status(201).json({ code: result.code });
});

router.get('/:code', async (req, res) => {
    const { url } = await shortener.get(req.params.code);
    if (url === null) {
        return res.status(404).json({ error: 'Not Found' });
    }
    return res.redirect(url);
});

module.exports = router;
