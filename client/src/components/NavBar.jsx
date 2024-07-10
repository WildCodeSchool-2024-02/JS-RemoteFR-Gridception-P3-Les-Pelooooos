import NavBarLinks from "./NavBarLinks";

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
  const { auth } = useAuth();

  return (
    <section className="navbar-container">
      <NavBarLinks to="/" icon={homeIcon} activeIcon={homeIconGreen} />
      <NavBarLinks to="/carte" icon={mapIcon} activeIcon={mapIconGreen} />
      {auth ? (
        <NavBarLinks to="/profil" icon={userIcon} activeIcon={userIconGreen} />
      ) : (
        <NavBarLinks
          to="/connexion"
          icon={userIcon}
          activeIcon={userIconGreen}
        />
      )}
      <NavBarLinks
        to="/administrateur"
        icon={settingsIcon}
        activeIcon={settingsIconGreen}
      />
    </section>
  );
}
