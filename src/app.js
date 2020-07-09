const express = require('express');
const redis = require('redis');

const ShortenerService = require('./ShortenerService');

const redisClient = redis.createClient({
  port: 6379,
  host: 'localhost',
});
const shortenerService = new ShortenerService(redisClient, () => {
    return Math.random().toString(36).substring(2, 8);
});

const app = express();
app.use(express.json());

app.post('/shorten', (req, res) => {
  shortenerService.shorten(req.body.url, (err, result, code) => {
    return res.status(201).json({ url: code });
  });
});

app.get('/:code', (req, res) => {
  shortenerService.get(req.params.code, (err, value) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.redirect(value);
  });
});

app.listen(8080, () => console.log('Listening on port 8080'));