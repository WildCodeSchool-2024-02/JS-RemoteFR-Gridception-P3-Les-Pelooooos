const AbstractSeeder = require("./AbstractSeeder");

class BrandsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "brands", truncate: true });
    this.brands = [
      "Mercedes",
      "Toyota",
      "Audi",
      "BMW",
      "Chevrolet",
      "Hyundai",
      "Jaguar",
      "Kia",
      "Nissan",
      "Porsche",
      "Tesla",
      "Volkswagen",
    ];
  }

  run() {
    for (let i = 0; i < this.brands.length; i += 1) {
      const fakeBrands = {
        brand_name: this.brands[i],
        refName: `brands_${i}`,
      };

      this.insert(fakeBrands);
    }
  }
}

module.exports = BrandsSeeder;
