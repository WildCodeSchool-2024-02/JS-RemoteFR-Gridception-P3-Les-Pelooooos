import { Link } from "react-router-dom";
import InscriptionProfil from "../components/InscriptionProfil";

import logoGeocode from "../assets/images/logo-geocode.png";

export default function Inscription() {
  return (
    <section>
      <Link to="/">
        <img className="logoId" src={logoGeocode} alt="Logo Geocode" />
      </Link>
      <h1 className="h1Id">INSCRIPTION</h1>
      <InscriptionProfil />
      <button className="buttonId" type="submit">
        SE CONNECTER
      </button>
    </section>
  );
}
