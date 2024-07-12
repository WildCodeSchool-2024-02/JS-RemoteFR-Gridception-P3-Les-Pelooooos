const AbstractSeeder = require("./AbstractSeeder");
const BrandsSeeder = require("./BrandsSeeder");
const UsersSeeder = require("./UsersSeeder");
const ModelsSeeder = require("./ModelsSeeder");

class CarsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "cars",
      truncate: true,
      dependencies: [BrandsSeeder, UsersSeeder, ModelsSeeder],
    });

    this.brandId = [1, 2, 3, 4];
    this.modelId = [1, 5, 10, 13];
    this.userId = [1, 2, 3, 3];
  }

  run() {
    for (let i = 0; i < 4; i += 1) {
      const cars = {
        brand_id: this.brandId[i],
        model_id: this.modelId[i],
        user_id: this.userId[i],
        refName: `cars_${i}`,
      };

      this.insert(cars);
    }
  }
}

module.exports = CarsSeeder;
