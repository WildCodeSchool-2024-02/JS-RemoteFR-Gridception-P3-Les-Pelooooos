const AbstractSeeder = require("./AbstractSeeder");

class PlugsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "plugs", truncate: true });
    this.plugsPower = ["22", "25","30"];
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const fakePlugs = {
        power: this.plugsPower[i],
      };

      this.insert(fakePlugs);
    }
  }
}

module.exports = PlugsSeeder;
