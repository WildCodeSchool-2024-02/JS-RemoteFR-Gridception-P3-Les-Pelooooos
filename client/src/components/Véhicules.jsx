import PropTypes from "prop-types";
import iconsSetting from "../assets/images/icons-settings.png";
import iconsCars from "../assets/images/icons-car.png";

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
      <div className="caracteristic-station">
        <p className="caracteristic-content-cars">Model: {car.name}</p>
        <p className="caracteristic-content-cars">Type de prise</p>
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

