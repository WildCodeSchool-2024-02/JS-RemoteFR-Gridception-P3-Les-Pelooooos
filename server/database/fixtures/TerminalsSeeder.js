const AbstractSeeder = require("./AbstractSeeder");

class TerminalsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "terminals", truncate: true });
    this.longitude = [3.407609123225763, 5.407609123225763];
    this.latitude = [43.41959147913006, 53.41959147913006];
    this.nameStation = ["Paris", "Marseille"];
    this.adressStation = [
      "1 chemin des parisien 75000 Paris",
      "10 rue des beau gosse 13000 Marseille",
    ];
    this.numberPlugs = [10, 45];
    this.free = [true, false];
    this.openingHours = ["7 jours sur 7", "24 heures sur 24"];
    this.pmrAccessibility = ["Accessible aux PMR", "Non accessible"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeTerminals = {
        longitude: this.longitude[i],
        latitude: this.latitude[i],
        name_station: this.nameStation[i],
        adress_station: this.adressStation[i],
        number_plugs: this.numberPlugs[i],
        free: this.free[i],
        opening_hours: this.openingHours[i],
        pmr_accessibility: this.pmrAccessibility[i],
      };

      this.insert(fakeTerminals);
    }
  }
}

module.exports = TerminalsSeeder;
