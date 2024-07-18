import PropTypes from "prop-types";
import iconsSetting from "../assets/images/icons-settings.png";
import iconsCars from "../assets/images/icons-car.png";
import iconVolant from "../assets/images/volant.png";

export default function Vehicules({ car }) {
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
        <p>Marque: {car.brand_name}</p>
      </div>
      <div className="adress-station">
        <img className="icons-cars" src={iconVolant} alt="Icon d'un volant" />
        <p className="caracteristic-content-cars">Modèle: {car.name}</p>
      </div>
    </section>
  );
}

Vehicules.propTypes = {
  car: PropTypes.arrayOf(
    PropTypes.shape({
      brand_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
