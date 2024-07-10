import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import homeIcon from "../assets/images/icons-home.png";
import homeIconGreen from "../assets/images/icons-home-green.png";
import userIcon from "../assets/images/icons-user.png";
import userIconGreen from "../assets/images/icons-user-green.png";
import settingsIcon from "../assets/images/icons-settings.png";
import settingsIconGreen from "../assets/images/icons-settings-green.png";
import mapIcon from "../assets/images/icons-map.png";
import mapIconGreen from "../assets/images/icons-map-green.png";
import "../styles/navBar.scss";

export default function NavBar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const { auth } = useAuth(); // Utilisation du contexte d'authentification
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la redirection

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  // Définition de la fonction handleProfileClick directement dans le corps du composant
  const handleProfileClick = () => {
    if (auth) {
      navigate("/profil"); // Redirige vers la page profil si l'utilisateur est connecté
    } else {
      navigate("/connexion"); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    }
  };

  return (
    <section className="navbar-container">
      <Link to="/">
        <button
          type="button"
          className={`icon home ${activeIcon === "home" ? "active" : ""}`}
          onClick={() => handleIconClick("home")}
        >
          <img
            src={activeIcon === "home" ? homeIconGreen : homeIcon}
            alt="icône maison"
          />
        </button>
      </Link>

      {/* Remplacement du Link par un bouton avec une redirection conditionnelle */}
      <button
        type="button"
        className={`icon user ${activeIcon === "user" ? "active" : ""}`}
        onClick={() => {
          handleIconClick("user");
          handleProfileClick(); // Appel de la fonction handleProfileClick
        }}
      >
        <img
          src={activeIcon === "user" ? userIconGreen : userIcon}
          alt="icône profil"
        />
      </button>

      <Link to="/carte">
        <button
          type="button"
          className={`icon map ${activeIcon === "map" ? "active" : ""}`}
          onClick={() => handleIconClick("map")}
        >
          <img
            src={activeIcon === "map" ? mapIconGreen : mapIcon}
            alt="icône map"
          />
        </button>
      </Link>

      <button
        type="button"
        className={`icon settings ${activeIcon === "settings" ? "active" : ""}`}
        onClick={() => handleIconClick("settings")}
      >
        <img
          src={activeIcon === "settings" ? settingsIconGreen : settingsIcon}
          alt="icône réglage"
        />
      </button>
    </section>
  );
}
