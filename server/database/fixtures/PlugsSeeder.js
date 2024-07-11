const AbstractSeeder = require("./AbstractSeeder");
const PlugsTypesSeeder = require("./PlugsTypesSeeder");

class PlugsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "plugs",
      truncate: true,
      dependencies: [PlugsTypesSeeder],
    });
    
    this.voltPower = ["120", "240", "400", "500", "1000"];
    this.plugTypeId = [1, 2, 3, 4, 5,];
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const plugs = {
        plug_type_id: this.plugTypeId[i],
        volt_power: this.voltPower[i],
        refName: `plugs_${i}`,
      };

      this.insert(plugs);
    }
  }
}

module.exports = PlugsSeeder;
