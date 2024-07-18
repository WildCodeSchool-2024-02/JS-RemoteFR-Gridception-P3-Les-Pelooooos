import PropTypes from "prop-types";
import iconsLocation from "../assets/images/icons-location.png";
import iconsElectricity from "../assets/images/icons-lightning-bolt.png";
import iconsHour from "../assets/images/icons-hour.png";
import iconsSetting from "../assets/images/icons-settings.png";

export default function Reservation({ reservation }) {


  return (
    <section className="reservation-container">
      <section className="container-icons">
        <img
          src={iconsSetting}
          alt="Icône des paramètres"
          className="icons-settings"
        />

        <h2 className="h2-profil">MA RÉSERVATION</h2>
      </section>
      <div className="adress-station1">
        <img
          src={iconsLocation}
          alt="Icône de la localisation"
          className="icons-location"
        />
        <p className="pAdress">{reservation.adress_station}</p>
      </div>
      <div className="caracteristic-station">
        <div className="caracteristic-content">
          <img
            src={iconsElectricity}
            alt="Icône de la puissance"
            className="icons"
          />
          <p>Puissance: {reservation.volt_power} Volt</p>
        </div>
        <div className="caracteristic-content">
          <img src={iconsHour} alt="Icône de l'heure" className="icons" />
          <p>Horaire: {reservation.hour}</p>
        </div>
      </div>
    </section>
  );
}

Reservation.propTypes = {
  reservation: PropTypes.arrayOf(
    PropTypes.shape({
      adress_station: PropTypes.string.isRequired,
      volt_power: PropTypes.number.isRequired,
      hour: PropTypes.string.isRequired,
    })
  ).isRequired,
};