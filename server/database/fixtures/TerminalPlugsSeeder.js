const AbstractSeeder = require("./AbstractSeeder");
const PlugsSeeder = require("./PlugsSeeder");
const TerminalsSeeder = require("./TerminalsSeeder");

class TerminalPlugsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "terminal_plugs",
      truncate: true,
      dependencies: [PlugsSeeder, TerminalsSeeder],
    });

    this.terminalId = [1, 1, 2, 3, 3];
    this.plugId = [1, 2, 3, 4, 5];
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const terminalPlugs = {
        terminal_id: this.terminalId[i],
        plug_id: this.plugId[i],
        refName: `terminal_plugs_${i}`,
      };
      this.insert(terminalPlugs);
    }
  }
}

module.exports = TerminalPlugsSeeder;
