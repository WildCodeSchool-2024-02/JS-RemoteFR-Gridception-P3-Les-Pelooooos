import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-geocode.png";
import imageAccroche from "../assets/images/illustration-accueil.jpg";
import "../styles/accueil.scss";

function Accueil() {
  return (
    <div className="page-container">
      <Link to="/">
        <img src={Logo} alt="Logo Géocode" className="logo" />
      </Link>
      <h1 className="title-accueil">
        BIENVENUE SUR <span className="color"> GEOCODE </span>
      </h1>
      <img
        src={imageAccroche}
        alt="Illustration d'accroche"
        className="accroche-image"
      />
      <p className="phrase-accroche">
        Simplifiez votre
        <span className="bold-color"> expérience de recharge électrique </span>
        avec notre application, qui vous permet de
        <span className="bold-color"> trouver </span> et de
        <span className="bold-color"> réserver </span> des bornes de recharge en
        quelques clics.
      </p>
    </div>
  );
}

export default Accueil;
