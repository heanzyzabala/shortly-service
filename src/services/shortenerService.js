class ShortenerServive {
  constructor(redisClient, codeSupplier) {
    this.redisClient = redisClient;
    this.codeSupplier = codeSupplier;
  }

  generate = (url, cb) => {
    const code = this.codeSupplier();
    this.redisClient.set(code, url, (err, result) => {
      cb(err, result, code);
    });
  }

  get = (code, cb) => {
    this.redisClient.get(code, (err, value) => {
      cb(err, value);
    });
  }
}

module.exports = ShortenerServive;