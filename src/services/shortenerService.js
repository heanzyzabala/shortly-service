class ShortenerServive {
  constructor(redisClient, host, codeSupplier) {
    this.redisClient = redisClient;
    this.host = host;
    this.codeSupplier = codeSupplier;
  }

  generate = (url, cb) => {
    const code = this.codeSupplier();
    this.redisClient.set(code, url, (err, result) => {
      cb(err, result, `${this.host}/${code}`);
    });
  }

  get = (code, cb) => {
    this.redisClient.get(code, (err, value) => {
      cb(err, value);
    });
  }
}

module.exports = ShortenerServive;