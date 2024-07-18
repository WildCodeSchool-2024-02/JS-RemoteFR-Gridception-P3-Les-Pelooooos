import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

import logoGeocode from "../assets/images/logo-geocode.png";

import "../styles/identification.scss";

export default function Identification() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState({
    identifiant: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setIdentifier({ ...identifier, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3310/api/auth/login", {
        email: identifier.identifiant,
        password: identifier.password,
      });

      login(res.data);

      navigate(`/profil/${res.data.user.id}`);
    } catch (err) {
      console.error(err);
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

      <form className="formId" onSubmit={handleSubmit}>
        <p className="pId2">Email :</p>

        <input
          className="inputId"
          required
          type="email"
          placeholder="Email *"
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

        <button className="buttonId" type="submit">
          SE CONNECTER
        </button>
      </form>

      <p className="pId">Vous n'avez pas de compte ? </p>
      <p className="pId">
        <a className="aId" href="/inscription">
          Inscrivez-vous ici{" "}
        </a>
      </p>
    </section>
  );
}
