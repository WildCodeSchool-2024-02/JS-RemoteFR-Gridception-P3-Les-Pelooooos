import { Link } from "react-router-dom";
import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
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
  // const {auth} = useAuth();
  // const navigate = useNavigate();

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  // {const handleProfileClick = () => {
  //   if (auth) {
  //     navigate("/profil");
  //   } else {
  //     navigate("/connexion")
  //   }
  // } }

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

      <Link to="/profil">
        <button
          type="button"
          className={`icon user ${activeIcon === "user" ? "active" : ""}`}
          onClick={() => handleIconClick("user")}
        >
          <img
            src={activeIcon === "user" ? userIconGreen : userIcon}
            alt="icône profil"
          />
        </button>
      </Link>

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
