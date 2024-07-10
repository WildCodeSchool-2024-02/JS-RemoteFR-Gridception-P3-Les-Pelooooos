const data = require("../../public/tmp/data.json");

const AbstractSeeder = require("./AbstractSeeder");

class TerminalsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "terminals", truncate: true });
  }

  run() {
    try {
      for (let i = 0; i < 15; i += 1) {
        const fakeTerminals = {
          longitude: data.features[i].geometry.coordinates[0],
          latitude: data.features[i].geometry.coordinates[1],
          name_station: data.features[i].properties.nom_station,
          adress_station: data.features[i].properties.adresse_station,
          number_plugs: data.features[i].properties.nbre_pdc,
          free: data.features[i].properties.gratuit,
          opening_hours: data.features[i].properties.horaires,
          pmr_accessibility:
            data.features[i].properties.accessibilite_pmr,
          refName: `terminals_${i}`,
        };

        this.insert(fakeTerminals);
      }
    } catch (err) {
      console.error("Erreur de parsing", err);
    }
  }
}

module.exports = TerminalsSeeder;
