import { useState } from "react";

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

export default function InscriptionProfil() {
  const [inscription, setInscription] = useState({
    email: "",
    nom: "",
    prenom: "",
    genre: "",
    dateNaissance: "",
    ville: "",
    cp: "",
    vehicule: "",
    mp: "",
    confirmationMp: "",
  });

  const [selectedMarques, setSelectedMarques] = useState([]);
  const [selectedModeles, setSelectedModeles] = useState([]);
  const [error, setError] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setInscription({ ...inscription, [name]: value });

    if (name === "vehicule") {
      const numberOfVehicules = parseInt(value, 10) || 0;
      setSelectedMarques(Array(numberOfVehicules).fill(""));
      setSelectedModeles(Array(numberOfVehicules).fill(""));
    }
  };

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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidCodePostal = (codePostal) => {
    const codePostalRegex = /^[0-9]{5}$/;
    return codePostalRegex.test(codePostal);
  };

  const togglePopup = () => {
    if (inscription.genre === "") {
      setError("Le genre est requis.");
    } else if (inscription.nom === "") {
      setError("Le nom est requis.");
    } else if (inscription.prenom === "") {
      setError("Le prénom est requis.");
    } else if (inscription.dateNaissance === "") {
      setError("La date de naissance est requise.");
    } else if (!isValidEmail(inscription.email)) {
      setError("L'adresse e-mail est invalide.");
    } else if (inscription.ville === "") {
      setError("La ville est requise.");
    } else if (!isValidCodePostal(inscription.cp)) {
      setError("Le code postal est invalide.");
    } else if (inscription.mp === "") {
      setError("Le mot de passe est requis.");
    } else if (inscription.confirmationMp !== inscription.mp) {
      setError("Les mots de passe ne correspondent pas.");
    } else if (inscription.vehicule === "") {
      setError("Le nombre de véhicules est obligatoire.");
    } else if (inscription.marque === "") {
      setError("La marque du véhicule est obligatoire.");
    } else if (inscription.modele === "") {
      setError("Le modèle du véhicule est obligatoire.");
    } else if (inscription.type === "") {
      setError("Le type de prise est obligatoire.");
    } else {
      setError("");
      setInscription({
        genre: "",
        nom: "",
        prenom: "",
        dateNaissance: "",
        email: "",
        ville: "",
        cp: "",
        mp: "",
        confirmationMp: "",
        vehicule: "",
      });
      setSelectedMarques([]);
      setSelectedModeles([]);
    }
  };

  const renderVehiculeForms = () => {
    const numberOfVehicules = parseInt(inscription.vehicule, 10) || 0;
    const vehiculeForms = [];

    for (let i = 0; i < numberOfVehicules; i += 1) {
      vehiculeForms.push(
        <div key={i} className="formIns">
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

          <label className="labelIns" htmlFor="priseType">
            Type de prise
          </label>
          <select className="inputIns" name="priseType">
            <option value="">Sélectionnez le type de prise</option>
            <option value="type-ef">Prise type EF</option>
            <option value="type-2">Prise type 2</option>
            <option value="type-ccs">Prise type Combo CCS</option>
            <option value="type-chademo">Prise type CHAdeMO</option>
            <option value="autre">Autre type de prise</option>
          </select>
        </div>
      );
    }

    return vehiculeForms;
  };
  return (
    <section className="profilInformation">
      <form className="formIns" onSubmit={(event) => event.preventDefault()}>
        <h2 className="h2Ins"> INFORMATION DE VOTRE PROFIL</h2>
        <label className="labelIns" htmlFor="genre">
          Genre
        </label>
        <select
          className="inputIns"
          name="genre"
          value={inscription.genre}
          onChange={(e) => handleChangeForm(e)}
        >
          <option value="">Sélectionnez votre genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
          <option value="Autre">Non communiqué</option>
        </select>
        <label className="labelIns" htmlFor="nom">
          Nom
        </label>
        <input
          className="inputIns"
          type="text"
          name="nom"
          value={inscription.nom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="prenom">
          Prénom
        </label>
        <input
          className="inputIns"
          type="text"
          name="prenom"
          value={inscription.prenom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="dateNaissance">
          Date de naissance
        </label>
        <input
          className="inputIns"
          type="date"
          name="dateNaissance"
          value={inscription.dateNaissance}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="email">
          Email
        </label>
        <input
          className="inputIns"
          type="email"
          name="email"
          value={inscription.email}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="ville">
          Ville
        </label>
        <input
          className="inputIns"
          type="text"
          name="ville"
          value={inscription.ville}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="cp">
          Code Postal
        </label>
        <input
          className="inputIns"
          type="text"
          name="cp"
          value={inscription.cp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="mp">
          Mot de passe
        </label>
        <input
          className="inputIns"
          type="password"
          name="mp"
          value={inscription.mp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="confirmationMp">
          Confirmation mot de passe
        </label>
        <input
          className="inputIns"
          type="password"
          name="confirmationMp"
          value={inscription.confirmationMp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="vehicule">
          Nombre de véhicules
        </label>
        <select
          className="inputIns"
          name="vehicule"
          value={inscription.vehicule}
          onChange={(e) => handleChangeForm(e)}
        >
          <option value="">Sélectionnez le nombre de véhicules</option>
          <option value="1">1 véhicule</option>
          <option value="2">2 véhicules</option>
          <option value="3">3 véhicules</option>
          <option value="4">4 véhicules</option>
          <option value="5">5 véhicules</option>
        </select>
      </form>

      <section className="profilVehicule">
        <h2 className="h2Ins"> INFORMATION DE VOTRE/VOS VEHICULE(S)</h2>
        {renderVehiculeForms()}
        {error && <p className="error">{error}</p>}
        <div className="">
          <button className="buttonIns" type="submit" onClick={togglePopup}>
            VALIDER
          </button>
        </div>
      </section>
    </section>
  );
}
