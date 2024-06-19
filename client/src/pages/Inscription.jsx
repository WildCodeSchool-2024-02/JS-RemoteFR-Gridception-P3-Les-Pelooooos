import { Link } from "react-router-dom";

import logoGeocode from "../assets/images/logo-geocode.png";

export default function Inscription() {
  return (
    <section>
      <Link to="/">
        <img className="logoId" src={logoGeocode} alt="Logo Geocode" />
      </Link>
      <h1 className="h1Id">CONNEXION</h1>
      <button className="buttonId" type="submit">
        SE CONNECTER
      </button>
    </section>
  );
}
