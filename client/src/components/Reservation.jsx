import iconsLocation from "../assets/images/icons-location.png";
import iconsElectricity from "../assets/images/icons-lightning-bolt.png";
import iconsHour from "../assets/images/icons-hour.png";
import iconsItinerary from "../assets/images/icons-itinerary.png";
import iconsSetting from "../assets/images/icons-settings.png";

export default function Reservation() {
  return (
    <section className="reservation-container">
      <section className="container-icons">
        <img
          src={iconsSetting}
          alt="Icône des paramètres"
          className="icons-settings"
        />

        <h2 className="h2-profil">MA RESERVATION</h2>
      </section>
      <div className="adress-station">
        <img
          src={iconsLocation}
          alt="Icône de la localisation"
          className="icons-location"
        />
        Adresse de la station
      </div>
      <div className="caracteristic-station">
        <div className="caracteristic-content">
          <img
            src={iconsElectricity}
            alt="Icône de la puissance"
            className="icons"
          />
          Puissance
        </div>
        <div className="caracteristic-content">
          <img src={iconsHour} alt="Icône de l'heure" className="icons" />
          Heure de la réservation
        </div>
        <div className="caracteristic-content">
          <img
            src={iconsItinerary}
            alt="Icône de l'itinéraire"
            className="icons"
          />
          Itinéraire (nb de km)
        </div>
      </div>
    </section>
  );
}
