const data = require("../../public/tmp/data.json");

const AbstractSeeder = require("./AbstractSeeder");

class TerminalsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "terminals", truncate: true });
  }

  run() {
    try {
      for (let i = 0; i < 6; i += 1) {
        const fakeTerminals = {
          longitude: data.features[0].geometry.coordinates[0],
          latitude: data.features[0].geometry.coordinates[1],
          name_station: data.features[0].properties.nom_station,
          adress_station: data.features[0].properties.adresse_station,
          number_plugs: data.features[0].properties.nbre_pdc,
          free: data.features[0].properties.gratuit,
          opening_hours: data.features[0].properties.horaires,
          pmr_accessibility:
            data.features[0].properties.accessibilite_pmr,
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
