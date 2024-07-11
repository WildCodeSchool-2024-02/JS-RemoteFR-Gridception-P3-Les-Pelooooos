const AbstractSeeder = require("./AbstractSeeder");
const PlugsTypesSeeder = require("./PlugsTypesSeeder");
const BrandsSeeder = require("./BrandsSeeder");

class ModelsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "models",
      truncate: true,
      dependencies: [PlugsTypesSeeder, BrandsSeeder],
    });
    this.name = [
      "Audi e-tron",
      "Audi e-tron Sportback",
      "Audi e-tron GT",
      "Audi Q4 e-tron",
      "BMW i3",
      "BMW i4",
      "BMW iX3",
      "BMW iX",
      "BMW i7",
      "Chevrolet Bolt EV",
      "Chevrolet Bolt EUV",
      "Hyundai Kona Electric",
      "Hyundai Ioniq Electric",
      "Hyundai Ioniq 5",
      "Jaguar I-PACE",
      "Kia Soul EV",
      "Kia Niro EV",
      "Kia EV6",
      "Nissan Leaf",
      "Nissan Ariya",
      "Porsche Taycan",
      "Porsche Taycan Cross Turismo",
      "Tesla Model S",
      "Tesla Model 3",
      "Tesla Model X",
      "Tesla Model Y",
      "Tesla Cybertruck",
      "Tesla Roadster",
      "Tesla Semi",
      "Volkswagen ID.3",
      "Volkswagen ID.4",
      "Volkswagen ID. Buzz",
      "Volkswagen ID.6",
    ];

    this.brandsId = [
      1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9,
      9, 9, 9, 9, 10, 10, 10, 10,
    ];

    this.plugsTypesId = [
      1, 1, 2, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 5, 5, 5,
      5, 5, 5, 5, 2, 2, 2, 2,
    ];
  }

  run() {
    for (let i = 0; i < 33; i += 1) {
      const models = {
        name: this.name[i],
        brand_id: this.brandsId[i],
        plug_type_id: this.plugsTypesId[i],
        refName: `models_${i}`,
      };
      this.insert(models);
    }
  }
}

module.exports = ModelsSeeder;
