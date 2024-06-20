import { useState } from "react";
import "../scss/Inscription.scss";

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
    }
  };

  return (
    <section className="profilInformation">
      <h2> INFORMATION DE VOTRE PROFIL</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={inscription.email}
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          value={inscription.nom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          name="prenom"
          value={inscription.prenom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          value={inscription.genre}
          onChange={(e) => handleChangeForm(e)}
        >
          <option value="">Selectionnez vore genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
          <option value="Autre">Autre</option>
        </select>

        <label htmlFor="dateNaissance">Date de naissance</label>
        <input
          type="date"
          name="dateNaissance"
          value={inscription.dateNaissance}
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="prenom">Ville</label>
        <input
          type="text"
          name="ville"
          value={inscription.ville}
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="cp">Code Postal</label>
        <input
          type="text"
          name="cp"
          value={inscription.cp}
          onChange={(e) => handleChangeForm(e)}
        />
      </form>
      <label htmlFor="vehicule">Nombre de véhicules</label>
      <select
        name="vehicule"
        value={inscription.vehicule}
        onChange={(e) => handleChangeForm(e)}
      >
        <option value="">Selectionnez le nombre de véhicules</option>
        <option value="1">1 véhicule</option>
        <option value="2">2 véhicules</option>
        <option value="3">3 véhicules</option>
        <option value="4">4 véhicules</option>
        <option value="5">5 véhicules</option>
      </select>
      <label htmlFor="mp">Mot de passe</label>
      <input
        required
        type="password"
        name="mp"
        value={inscription.mp}
        onChange={(e) => handleChangeForm(e)}
      />
      <label htmlFor="confirmationMp">Confirmation du mot de passe</label>
      <input
        required
        type="password"
        name="confirmationMp"
        value={inscription.conformationMp}
        onChange={(e) => handleChangeForm(e)}
      />

      {error && <p className="error">{error}</p>}
      <button className="buttonIns" type="submit" onClick={togglePopup}>
        VALIDER
      </button>
    </section>
  );
}
