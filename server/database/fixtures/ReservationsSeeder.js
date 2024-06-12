const AbstractSeeder = require("./AbstractSeeder");
const TerminalsSeeder = require("./TerminalsSeeder");
const PlugsSeeder = require("./PlugsSeeder");

class ReservationsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "reservations",
      truncate: true,
      dependencies: [TerminalsSeeder, PlugsSeeder],
    });
    this.reservationsDate = ["2024-06-11", "2001-06-14"];
    this.reservationsHour = ["16:19:00", "16:27:00"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeReservations = {
        date: this.reservationsDate[i],
        hour: this.reservationsHour[i],
        terminals_id: this.getRef(
          `terminals_${Math.floor(Math.random() * 1) + 1}`
        ).insertId,
        plugs_id: this.getRef(`plugs_${Math.floor(Math.random() * 1) + 1}`)
          .insertId,
          refName: `reservations_${i}`
      };

      this.insert(fakeReservations);
    }
  }
}

module.exports = ReservationsSeeder;
