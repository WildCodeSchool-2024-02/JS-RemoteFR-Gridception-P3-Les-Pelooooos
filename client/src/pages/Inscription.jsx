import { Link } from "react-router-dom";
import InscriptionProfil from "../components/InscriptionProfil";
import "../scss/Inscription.scss"

import logoGeocode from "../assets/images/logo-geocode.png";

export default function Inscription() {
  return (
    <section>
      <Link to="/">
        <img className="logoIns" src={logoGeocode} alt="Logo Geocode" />
      </Link>
      <h1>INSCRIPTION</h1>
      <InscriptionProfil />
      <button type="submit">
        SE CONNECTER
      </button>
    </section>
  );
}
