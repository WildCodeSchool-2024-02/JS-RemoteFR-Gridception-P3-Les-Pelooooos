import { Link } from "react-router-dom";

import iconX from "../assets/images/iconX.png";
import iconInsta from "../assets/images/iconInsta.png";
import iconFb from "../assets/images/iconFb.png";

export default function reseauxSociaux() {
  return (
    <section className="iconsSociaux">
      <Link to="https://www.facebook.com/" target="_blank">
        <img className="icon-social" src={iconFb} alt="Icon Facebook" />
      </Link>

      <Link to="https://x.com/X" target="_blank">
        <img className="icon-social" src={iconX} alt="Icon x(twitter)" />
      </Link>

      <Link to="https://www.instagram.com/" target="_blank">
        <img className="icon-social" src={iconInsta} alt="Icon Instagram" />
      </Link>
    </section>
  );
}
