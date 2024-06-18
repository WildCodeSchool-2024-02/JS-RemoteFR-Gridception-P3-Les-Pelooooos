const AbstractSeeder = require("./AbstractSeeder");
const BrandsSeeder = require("./BrandsSeeder");
const UsersSeeder = require("./UsersSeeder");
const PlugsSeeder = require("./PlugsSeeder");

class CarsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "cars",
      truncate: true,
      dependencies: [BrandsSeeder, UsersSeeder, PlugsSeeder],
    });
    this.cars = ["AMG 163", "CLIO"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeCars = {
        model: this.cars[i],
        brands_id: this.getRef(`brands_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        users_id: this.getRef(`users_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        plugs_id: this.getRef(`plugs_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
        refName: `cars_${i}`,
      };

      this.insert(fakeCars);
    }
  }
}

module.exports = CarsSeeder;
