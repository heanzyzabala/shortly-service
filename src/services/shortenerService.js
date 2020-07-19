class ShortenerServive {
  constructor(urlRepo, codeSupplier) {
    this.urlRepo = urlRepo;
    this.codeSupplier = codeSupplier;
  }

  generate = async (url) => this.urlRepo.insert({ code: this.codeSupplier(), url });

  get = async (code) => this.urlRepo.findOne({ code });
}

module.exports = ShortenerServive;
