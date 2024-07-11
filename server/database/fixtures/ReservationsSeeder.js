const AbstractSeeder = require("./AbstractSeeder");
const TerminalsSeeder = require("./TerminalsSeeder");
const CarsSeeder = require("./CarsSeeder");

class ReservationsSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "reservations",
      truncate: true,
      dependencies: [TerminalsSeeder, CarsSeeder],
    });
    this.terminalId = [1, 2, 3];
    this.carId = [1, 2, 3];
    this.reservationsDate = ["2024-06-11", "2001-06-14", "2024-07-11"];
    this.reservationsHour = ["16:19:00", "16:27:00", "12:40:00"];
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const reservations = {
        terminal_id: this.terminalId[i],
        car_id: this.carId[i],
        date: this.reservationsDate[i],
        hour: this.reservationsHour[i],
      };

      this.insert(reservations);
    }
  }
}

module.exports = ReservationsSeeder;
