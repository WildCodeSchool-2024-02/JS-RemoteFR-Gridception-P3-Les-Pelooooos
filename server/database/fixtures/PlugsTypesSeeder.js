const AbstractSeeder = require("./AbstractSeeder");

class PlugsTypesSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "plugs_types", truncate: true });
    this.plugsTypes = [true, false];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakePlugsTypes = {
        plug_type: this.plugsTypes[i],
        refName: `plugs_types_${i}`
      };

      this.insert(fakePlugsTypes);
    }
   
  }
}

module.exports = PlugsTypesSeeder;