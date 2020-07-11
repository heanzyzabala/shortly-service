class ShortenerServive {
  constructor(redisClient, codeSupplier) {
    this.redisClient = redisClient;
    this.codeSupplier = codeSupplier;
  }

  shorten = (url, cb) => {
    const code = this.codeSupplier();
    this.redisClient.set(code, url, (err, result) => {
      console.log(`Generated code: ${code}`);
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