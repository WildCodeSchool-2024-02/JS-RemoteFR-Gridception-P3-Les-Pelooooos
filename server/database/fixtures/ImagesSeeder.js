const AbstractSeeder = require("./AbstractSeeder");

class ImagesSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "images", truncate: true });
    this.images = ["https://pixabay.com/fr/vectors/voiture-%C3%A9lectrique-2545290/", "https://pixabay.com/fr/photos/autopartage-voiture-%C3%A9lectrique-4382651/"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeImages = {
        URL: this.images[i],
      };

      this.insert(fakeImages);
    }
  }
}

module.exports = ImagesSeeder;
