import { useLoaderData } from "react-router-dom";
import pictureUser from "../assets/images/picture-user.jpg";
import Vehicules from "../components/Véhicules";
import Reservation from "../components/Reservation";
import "../styles/profil.scss";
import "../styles/template.scss";

export default function Profil() {
  const users = useLoaderData();
  return (
    <>
      <section className="header-profil">
        <section className="header-profil-content">
          <h1>PROFIL</h1>
          <p>Bonjour {users[0].firstname}</p>
        </section>
        <img
          className="img-profil"
          src={pictureUser}
          alt="Avatar de votre Profil"
        />
      </section>

      <section className="container">
        <Reservation />
        <Vehicules />
      </section>
    </>
  );
}
