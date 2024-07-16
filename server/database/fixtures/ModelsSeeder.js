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
      "e-tron",
      "e-tron Sportback",
      "e-tron GT",
      "Q4 e-tron",
      "i3",
      "i4",
      "iX3",
      "iX",
      "i7",
      "Bolt EV",
      "Bolt EUV",
      "Kona Electric",
      "Ioniq Electric",
      "Ioniq 5",
      "I-PACE",
      "Soul EV",
      "Niro EV",
      "EV6",
      "Leaf",
      "Ariya",
      "Taycan",
      "Taycan Cross Turismo",
      "Model S",
      "Model 3",
      "Model X",
      "Model Y",
      "Cybertruck",
      "Roadster",
      "Semi",
      "ID.3",
      "ID.4",
      "ID. Buzz",
      "ID.6",
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
