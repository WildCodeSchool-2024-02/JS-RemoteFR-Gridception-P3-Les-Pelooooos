const AbstractSeeder = require("./AbstractSeeder");

class PlugsTypesSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "plugs_types", truncate: true });
    this.plugsTypes = [
      "Type 1",
      "Type 2",
      "CCS",
      "CHAdeMO",
      "Tesla Supercharger",
    ];
  }

  run() {
    for (let i = 0; i < this.plugsTypes.length; i += 1) {
      const fakePlugsTypes = {
        plug_type: this.plugsTypes[i],
        refName: `plugs_types_${i}`,
      };
      this.insert(fakePlugsTypes);
    }
  }
}

module.exports = PlugsTypesSeeder;
