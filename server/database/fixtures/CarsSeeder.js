const AbstractSeeder = require("./AbstractSeeder");
const BrandsSeeder = require("./BrandsSeeder");
const PlugsSeeder = require("./PlugsSeeder");
const UsersSeeder = require("./UsersSeeder");

class CarsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "cars",
      truncate: true,
      dependencies: [BrandsSeeder, PlugsSeeder, UsersSeeder],
    });
    this.cars = ["AMG 163", "CLIO", "CLIO", "CLIO", "CLIO", "CLIO"];
  }

  run() {
    for (let i = 0; i < 6; i += 1) {
      const fakeCars = {
        brands_id: this.getRef(`brands_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        model: this.cars[i],
        plugs_id: this.getRef(`plugs_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        users_id: this.getRef(`users_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        refName: `cars_${i}`,
      };

      this.insert(fakeCars);
    }
  }
}

module.exports = CarsSeeder;
