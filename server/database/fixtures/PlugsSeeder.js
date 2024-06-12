const AbstractSeeder = require("./AbstractSeeder");
const TerminalsSeeder = require("./TerminalsSeeder");
const PlugsTypesSeeder = require("./PlugsTypesSeeder");

class PlugsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "plugs",
      truncate: true,
      dependencies: [TerminalsSeeder, PlugsTypesSeeder],
    });
    this.plugsPower = ["22", "25"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakePlugs = {
        power: this.plugsPower[i],
        terminals_id: this.getRef(
          `terminals_${Math.floor(Math.random() * 1) + 1}`
        ).insertId,
        plugs_types_id: this.getRef(
          `plugs_types_${Math.floor(Math.random() * 1) + 1}`
        ).insertId,
        refName: `plugs_${i}`
      };

      this.insert(fakePlugs);
    }
  }
}

module.exports = PlugsSeeder;
