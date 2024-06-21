import { useState } from "react";
import PropTypes from "prop-types";

const models = {
  audi: [
    "Audi e-tron",
    "Audi e-tron Sportback",
    "Audi e-tron GT",
    "Audi Q4 e-tron",
  ],
  bmw: ["BMW i3", "BMW i4", "BMW iX3", "BMW iX", "BMW i7"],
  chevrolet: ["Chevrolet Bolt EV", "Chevrolet Bolt EUV"],
  hyundai: [
    "Hyundai Kona Electric",
    "Hyundai Ioniq Electric",
    "Hyundai Ioniq 5",
  ],
  jaguar: ["Jaguar I-PACE"],
  kia: ["Kia Soul EV", "Kia Niro EV", "Kia EV6"],
  nissan: ["Nissan Leaf", "Nissan Ariya"],
  porsche: ["Porsche Taycan", "Porsche Taycan Cross Turismo"],
  tesla: [
    "Tesla Model S",
    "Tesla Model 3",
    "Tesla Model X",
    "Tesla Model Y",
    "Tesla Cybertruck",
    "Tesla Roadster",
    "Tesla Semi",
  ],
  volkswagen: [
    "Volkswagen ID.3",
    "Volkswagen ID.4",
    "Volkswagen ID. Buzz",
    "Volkswagen ID.6",
  ],
};

export default function InscriptionVehicules({ numberOfVehicules }) {
  const [selectedMarques, setSelectedMarques] = useState(
    Array(numberOfVehicules).fill("")
  );
  const [selectedModeles, setSelectedModeles] = useState(
    Array(numberOfVehicules).fill("")
  );

  const handleMarqueChange = (index, value) => {
    const newSelectedMarques = [...selectedMarques];
    newSelectedMarques[index] = value;
    setSelectedMarques(newSelectedMarques);
  };

  const handleModeleChange = (index, value) => {
    const newSelectedModeles = [...selectedModeles];
    newSelectedModeles[index] = value;
    setSelectedModeles(newSelectedModeles);
  };

  const vehiculeForms = [];
  for (let i = 0; i < numberOfVehicules; i += 1) {
    vehiculeForms.push(
      <div key={i}>
        <h3 className="h3Ins">Véhicule {i + 1}</h3>
        <label className="labelIns" htmlFor="vehiculeMarque">
          Marque du véhicule
        </label>
        <select
          className="inputIns"
          name="vehiculeMarques"
          value={selectedMarques[i]}
          onChange={(e) => handleMarqueChange(i, e.target.value)}
        >
          <option value="">Sélectionnez votre marque</option>
          {Object.keys(models).map((marque) => (
            <option key={marque} value={marque}>
              {marque.charAt(0).toUpperCase() + marque.slice(1)}
            </option>
          ))}
        </select>

        <label className="labelIns" htmlFor="vehiculeModele">
          Modèle du véhicule
        </label>
        <select
          className="inputIns"
          name="vehiculeModele"
          value={selectedModeles[i]}
          onChange={(e) => handleModeleChange(i, e.target.value)}
        >
          <option value="">Sélectionnez votre modèle</option>
          {models[selectedMarques[i]]?.map((modele) => (
            <option key={modele} value={modele}>
              {modele}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return <div>{vehiculeForms}</div>;
}

InscriptionVehicules.propTypes = {
  numberOfVehicules: PropTypes.number.isRequired,
};
