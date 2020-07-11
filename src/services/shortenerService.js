class ShortenerServive {
  constructor(redisClient, host, codeSupplier) {
    console.log(host);
    this.redisClient = redisClient;
    this.host = host;
    this.codeSupplier = codeSupplier;
  }

  generate = (url, cb) => {
    const shortenedUrl = `${this.host}/${this.codeSupplier()}`;
    this.redisClient.set(shortenedUrl, url, (err, result) => {
      cb(err, result, shortenedUrl);
    });
  }

  get = (code, cb) => {
    this.redisClient.get(code, (err, value) => {
      cb(err, value);
    });
  }
}

module.exports = ShortenerServive;