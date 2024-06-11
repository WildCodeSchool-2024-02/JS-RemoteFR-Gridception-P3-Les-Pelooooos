const AbstractSeeder = require("./AbstractSeeder");

class CarsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "cars", truncate: true });
    this.cars = ["AMG 163", "CLIO"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeCars = {
        model: this.cars[i],
      };

      this.insert(fakeCars);
    }
  }
}

module.exports = CarsSeeder;
