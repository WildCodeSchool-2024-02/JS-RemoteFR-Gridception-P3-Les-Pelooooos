const AbstractSeeder = require("./AbstractSeeder");

class ReservationsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "reservations", truncate: true });
    this.reservationsDate = ["2024-06-11", "2001-06-14"];
    this.reservationsHour = ["16:19:00", "16:27:00"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeReservations = {
        date: this.reservationsDate[i],
        hour: this.reservationsHour[i]
      };

      this.insert(fakeReservations);
    }
  }
}

module.exports = ReservationsSeeder;
