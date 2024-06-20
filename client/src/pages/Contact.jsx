import { Link } from "react-router-dom";

import Form from "../components/Form";
import ReseauxSociaux from "../components/ReseauxSociaux";

import Logo from "../assets/images/logo-geocode.png";

export default function Contact() {
  return (
    <section className="page-contact">
      <div className="LogoContact">
        <Link className="linkContact" to="/">
          <img src={Logo} alt="Logo Geocode" />
        </Link>
      </div>

      <h1 className="title1Contact">Contactez-nous</h1>

      <Form />

      <ReseauxSociaux />
    </section>
  );
}
