import { useState } from "react";

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
    <>
      <img src="../assets/images/logo-geocode.png" alt="Geocode logo" />
      <h1>CONNEXION</h1>
      <p>
        Veuillez vous connecter pour continuer et accéder à l'ensemble de nos
        fonctionnalités
      </p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          required
          placeholder="Identifiant *"
          name="identifiant"
          value={identifier.identifiant}
          onChange={(e) => handleChangeForm(e)}
        />
        <input
          required
          placeholder="Mot de passe *"
          name="password"
          value={identifier.password}
          onChange={(e) => handleChangeForm(e)}
        />
      </form>
      <button type="submit" onClick={togglePopup}>
        SE CONNECTER
      </button>

      <p>Vous n'avez pas de compte ? <a href= "/">Inscrivez-vous ici </a></p>
    </>
  );
}
