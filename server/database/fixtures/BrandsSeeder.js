const AbstractSeeder = require("./AbstractSeeder");

class BrandsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "brands", truncate: true });
    this.brands = ["Mercedes", "Toyota", "Toto", "Tata", "TUTU"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeBrands = {
        brand_name: this.brands[i],
        refName: `brands_${i}`,
      };

      this.insert(fakeBrands);
    }
  }
}

module.exports = BrandsSeeder;
