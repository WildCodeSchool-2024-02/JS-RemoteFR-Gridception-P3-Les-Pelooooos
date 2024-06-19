import pictureUser from "../assets/images/picture-user.jpg";
import Vehicules from "../components/Véhicules";
import Reservation from "../components/Reservation";

export default function Profil() {
  return (
    <>
      <section className="header-profil">
        <section className="header-profil-content">
          <h1>PROFIL</h1>
          <p>Bonjour (Name)</p>
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
