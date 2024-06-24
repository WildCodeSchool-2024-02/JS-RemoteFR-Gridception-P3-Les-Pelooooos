import { useState } from "react";
import InscriptionVehicules from "./InscriptionVehicules";

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

  const [error, setError] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setInscription({ ...inscription, [name]: value });
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
    if (!isValidEmail(inscription.email)) {
      setError("L'adresse e-mail est invalide.");
    } else if (inscription.nom === "") {
      setError("Le nom est requis.");
    } else if (inscription.prenom === "") {
      setError("Le prénom est requis.");
    } else if (inscription.genre === "") {
      setError("Le genre est requis.");
    } else if (inscription.dateNaissance === "") {
      setError("La date de naissance est requise.");
    } else if (inscription.ville === "") {
      setError("La ville est requise.");
    } else if (!isValidCodePostal(inscription.cp)) {
      setError("Le code postal est invalide.");
    } else if (inscription.vehicule === "") {
      setError("Le nombre de véhicules est obligatoire.");
    } else if (inscription.mp === "") {
      setError("Le mot de passe est requis.");
    } else if (inscription.confirmationMp !== inscription.mp) {
      setError("Les mots de passe ne correspondent pas.");
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
    }
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

        {error && <p className="error">{error}</p>}
        <button className="buttonIns" type="submit" onClick={togglePopup}>
          VALIDER
        </button>
      </form>
      <section className="profilVehicule">
        <h2 className="h2Ins"> INFORMATION DE VOTRE/VOS VEHICULES(S)</h2>
        <InscriptionVehicules
          numberOfVehicules={parseInt(inscription.vehicule, 10) || 0}
        />
      </section>
    </section>
  );
}
