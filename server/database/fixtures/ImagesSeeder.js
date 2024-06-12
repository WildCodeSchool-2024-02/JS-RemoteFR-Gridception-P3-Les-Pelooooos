const AbstractSeeder = require("./AbstractSeeder");
const UsersSeeder = require("./UsersSeeder");
const CarsSeeder = require("./CarsSeeder");

class ImagesSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "images",
      truncate: true,
      dependencies: [UsersSeeder, CarsSeeder],
    });
    this.images = [
      "https://pixabay.com/fr/vectors/voiture-%C3%A9lectrique-2545290/",
      "https://pixabay.com/fr/photos/autopartage-voiture-%C3%A9lectrique-4382651/",
    ];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeImages = {
        URL: this.images[i],
        users_id: this.getRef(`users_${Math.floor(Math.random() * 1) + 1}`).insertId,
        cars_id: this.getRef(`cars_${Math.floor(Math.random() * 1) + 1}`).insertId,
      };

      this.insert(fakeImages);
    }
  }
}

module.exports = ImagesSeeder;
