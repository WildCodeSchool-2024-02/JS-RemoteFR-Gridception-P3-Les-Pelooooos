const AbstractSeeder = require("./AbstractSeeder");

class TerminalsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "terminals", truncate: true });
    this.longitude = [
      3.407609123225763, 5.407609123225763, 5.407609123225763,
      5.407609123225763, 5.407609123225763, 5.407609123225763,
    ];
    this.latitude = [
      43.41959147913006, 53.41959147913006, 43.41959147913006,
      43.41959147913006, 43.41959147913006, 43.41959147913006,
    ];
    this.nameStation = [
      "Paris",
      "Marseille",
      "Paris",
      "Paris",
      "Paris",
      "Paris",
    ];
    this.adressStation = [
      "1 chemin des parisien 75000 Paris",
      "10 rue des beau gosse 13000 Marseille",
      "10 rue des beau gosse 13000 Marseille",
      "10 rue des beau gosse 13000 Marseille",
      "10 rue des beau gosse 13000 Marseille",
      "10 rue des beau gosse 13000 Marseille",
    ];
    this.numberPlugs = [10, 45, 10, 10, 10, 10];
    this.free = [true, false, true, true, true, true];
    this.openingHours = [
      "7 jours sur 7",
      "24 heures sur 24",
      "7 jours sur 7",
      "7 jours sur 7",
      "7 jours sur 7",
      "7 jours sur 7",
    ];
    this.pmrAccessibility = [
      "Accessible aux PMR",
      "Non accessible",
      "Accessible aux PMR",
      "Accessible aux PMR",
      "Accessible aux PMR",
      "Accessible aux PMR",
    ];
  }

  run() {
    for (let i = 0; i < 6; i += 1) {
      const fakeTerminals = {
        longitude: this.longitude[i],
        latitude: this.latitude[i],
        name_station: this.nameStation[i],
        adress_station: this.adressStation[i],
        number_plugs: this.numberPlugs[i],
        free: this.free[i],
        opening_hours: this.openingHours[i],
        pmr_accessibility: this.pmrAccessibility[i],
        refName: `terminals_${i}`,
      };

      this.insert(fakeTerminals);
    }
  }
}

module.exports = TerminalsSeeder;
