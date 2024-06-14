import { useState } from "react";
import "../scss/identification.scss";

export default function Identification() {
  const [identifier, setIdentifier] = useState({
    identifiant: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setIdentifier({ ...identifier, [name]: value });
  };

  const togglePopup = () => {
    if (identifier.identifiant !== "" && identifier.password !== "") {
      setIdentifier({
        identifiant: "",
        password: "",
      });
    }
  };

  return (
    <section className="identification">
      <img
        className="logoId"
        src="../assets/images/logo-geocode.png"
        alt="Geocode logo"
      />
      <h1 className="h1Id">CONNEXION</h1>
      <p className="pId">
        Veuillez vous connecter pour continuer et accéder à l'ensemble de nos
        fonctionnalités.
      </p>
      <form className="formId" onSubmit={(event) => event.preventDefault()}>
        <input
          className="inputId"
          required
          placeholder="Identifiant *"
          name="identifiant"
          value={identifier.identifiant}
          onChange={(e) => handleChangeForm(e)}
        />
        <input
          className="inputId"
          required
          placeholder="Mot de passe *"
          name="password"
          value={identifier.password}
          onChange={(e) => handleChangeForm(e)}
        />
      </form>
        <button className="buttonId" type="submit" onClick={togglePopup}>
          SE CONNECTER
        </button>
      <p>
        Vous n'avez pas de compte ? </p>
        <p><a href="/">Inscrivez-vous ici </a>
      </p>
    </section>
  );
}
