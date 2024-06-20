import { useState } from "react";
import { Link } from "react-router-dom";

import logoGeocode from "../assets/images/logo-geocode.png";

export default function Identification() {
  const [identifier, setIdentifier] = useState({
    identifiant: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setIdentifier({ ...identifier, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePopup = () => {
    if (!isValidEmail(identifier.identifiant)) {
      setError("L'adresse e-mail est invalide.");
    } else if (identifier.password === "") {
      setError("Le mot de passe est requis.");
    } else {
      setError("");
      setIdentifier({
        identifiant: "",
        password: "",
      });
    }
  };

  return (
    <section className="identification">
      <Link to="/">
        <img className="logoId" src={logoGeocode} alt="Logo Geocode" />
      </Link>
      <h1 className="h1Id">CONNEXION</h1>
      <p className="pId">
        Veuillez vous connecter pour continuer et accéder à l'ensemble de nos
        fonctionnalités.
      </p>
      <form className="formId" onSubmit={(event) => event.preventDefault()}>
        <p className="pId2">Identifiant :</p>
        <input
          className="inputId"
          required
          type="email"
          placeholder="Identifiant *"
          name="identifiant"
          value={identifier.identifiant}
          onChange={(e) => handleChangeForm(e)}
        />
        <p className="pId2">Mot de passe :</p>
        <input
          className="inputId"
          required
          type="password"
          placeholder="Mot de passe *"
          name="password"
          value={identifier.password}
          onChange={(e) => handleChangeForm(e)}
        />
        {error && <p className="error">{error}</p>}
        <button className="buttonId" type="submit" onClick={togglePopup}>
          SE CONNECTER
        </button>
      </form>
      <p className="pId">Vous n'avez pas de compte ? </p>
      <p className="pId">
        <a className="aId" href="/">
          Inscrivez-vous ici{" "}
        </a>
      </p>
    </section>
  );
}
