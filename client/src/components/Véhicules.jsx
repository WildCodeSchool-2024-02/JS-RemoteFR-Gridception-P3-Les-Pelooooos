import iconsSetting from "../assets/images/icons-settings.png";
import iconsCars from "../assets/images/icons-car.png";

export default function Vehicules() {
  return (
    <section className="reservation-container">
      <section className="container-icons">
        <img
          src={iconsSetting}
          alt="Icône des paramètres"
          className="icons-settings"
        />
        <div className="title-vehicule">
          <h2 className="h2-profil">MON/MES VÉHICULE(S)</h2>
        </div>
      </section>
      <div className="adress-station">
        <img src={iconsCars} alt="Icône de la voiture" className="icons-cars" />
        <p>Marque du véhicule</p>
      </div>
      <div className="caracteristic-station">
        <div className="caracteristic-content-cars">Modèle du véhicule</div>
        <div className="caracteristic-content-cars">Type de véhicule</div>
      </div>
    </section>
  );
}
