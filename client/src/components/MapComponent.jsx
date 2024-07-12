import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import axios from "axios";
import L from "leaflet";

import icon2 from "../assets/images/icons2-down.png";

import "leaflet/dist/leaflet.css";

function MapComponent({ searchQuery }) {
  const [terminals, setTerminals] = useState([]);
  const [position, setPosition] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const [informationTerminal, setInformationTerminal] = useState(false);
  const mapRef = useRef();
  const { VITE_API_URL } = import.meta.env;

  // eslint-disable-next-line no-underscore-dangle
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://img.icons8.com/?size=100&id=7qPSyE5sZFGJ&format=png&color=21A89A",
    iconUrl:
      "https://img.icons8.com/?size=100&id=7qPSyE5sZFGJ&format=png&color=21A89A",
    iconSize: [39, 43],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setHasLocation(true);
          console.info(`Position initiale: [${latitude}, ${longitude}]`);
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.info(
        "La géolocalisation n'est pas prise en charge par ce navigateur."
      );
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const fetchCoordinates = async () => {
        try {
          console.info(`Recherche de la ville: ${searchQuery}`);
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
          );
          if (response.data.length > 0) {
            const { lat, lon } = response.data[0];
            setPosition([parseFloat(lat), parseFloat(lon)]);
            setHasLocation(false);
            console.info(`Position trouvée: [${lat}, ${lon}]`);
          } else {
            console.warn("Aucune ville trouvée pour cette recherche.");
          }
        } catch (error) {
          console.error("Erreur lors de la recherche de la ville:", error);
        }
      };
      fetchCoordinates();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (position && mapRef.current) {
      mapRef.current.flyTo(position, 13);
    }
  }, [position]);

  useEffect(() => {
    const fetchTerminals = async () => {
      try {
        const response = await axios.get(`${VITE_API_URL}/api/terminals`);
        setTerminals(response.data);
      } catch (err) {
        console.info(err);
      }
    };
    fetchTerminals();
  }, [VITE_API_URL]);

  const handleMarkerClick = (terminal) => {
    setSelectedTerminal(terminal);
  };
  const handleInformationClick = () => {
    setInformationTerminal(!informationTerminal);
  };

  if (!position) {
    return <div>Chargement de votre position...</div>;
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        className="rounded-map"
        style={{ height: "100vh", width: "100vw" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hasLocation && (
          <Marker position={position}>
            <Popup>Vous êtes ici.</Popup>
          </Marker>
        )}
        {terminals.map((terminal) => (
          <Marker
            key={terminal.id}
            position={[terminal.latitude, terminal.longitude]}
            eventHandlers={{
              click: () => handleMarkerClick(terminal),
            }}/>
        ))}
      </MapContainer>

      {selectedTerminal && (
        <section>
          <section className="station">
            <h1>{selectedTerminal.name}</h1>
            <p>{selectedTerminal.adress}</p>
            {informationTerminal && (
              <section className="popupTerminal">
                <section className="argentTerminal">
                  <p>Coût réservation: 2€</p>
                  <p>Gratuité: {selectedTerminal.free ? "Oui" : "Non"}</p>
                </section>

                <form
                  className="formIns"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <label className="labelIns" htmlFor="dateReservation">
                    Date de réservation:
                  </label>
                  <input
                    className="inputIns"
                    type="date"
                    name="dateReservation"
                    value=""
                  />

                  <label className="labelIns" htmlFor="priseType">
                    Horaire de réservation:
                  </label>
                  <select className="inputIns" name="priseType">
                    <option value="1">00:00 - 00:30</option>
                    <option value="2">00:30 - 01:00</option>
                    <option value="3">01:00 - 01:30</option>
                    <option value="4">01:30 - 02:00</option>
                    <option value="5">02:00 - 02:30</option>
                    <option value="6">02:30 - 03:00</option>
                    <option value="7">03:00 - 03:30</option>
                    <option value="8">03:30 - 04:00</option>
                    <option value="9">04:00 - 04:30</option>
                    <option value="10">04:30 - 05:00</option>
                    <option value="11">05:00 - 05:30</option>
                    <option value="12">05:30 - 06:00</option>
                    <option value="13">06:00 - 06:30</option>
                    <option value="14">06:30 - 07:00</option>
                    <option value="15">07:00 - 07:30</option>
                    <option value="16">07:30 - 08:00</option>
                    <option value="17">08:00 - 08:30</option>
                    <option value="18">08:30 - 09:00</option>
                    <option value="19">09:00 - 09:30</option>
                    <option value="20">09:30 - 10:00</option>
                    <option value="21">10:00 - 10:30</option>
                    <option value="22">10:30 - 11:00</option>
                    <option value="23">11:00 - 11:30</option>
                    <option value="24">11:30 - 12:00</option>
                    <option value="25">12:00 - 12:30</option>
                    <option value="26">12:30 - 13:00</option>
                    <option value="27">13:00 - 13:30</option>
                    <option value="28">13:30 - 14:00</option>
                    <option value="29">14:00 - 14:30</option>
                    <option value="30">14:30 - 15:00</option>
                    <option value="31">15:00 - 15:30</option>
                    <option value="32">15:30 - 16:00</option>
                    <option value="33">16:00 - 16:30</option>
                    <option value="34">16:30 - 17:00</option>
                    <option value="35">17:00 - 17:30</option>
                    <option value="36">17:30 - 18:00</option>
                    <option value="37">18:00 - 18:30</option>
                    <option value="38">18:30 - 19:00</option>
                    <option value="39">19:00 - 19:30</option>
                    <option value="40">19:30 - 20:00</option>
                    <option value="41">20:00 - 20:30</option>
                    <option value="42">20:30 - 21:00</option>
                    <option value="43">21:00 - 21:30</option>
                    <option value="44">21:30 - 22:00</option>
                    <option value="45">22:00 - 22:30</option>
                    <option value="46">22:30 - 23:00</option>
                    <option value="47">23:00 - 23:30</option>
                    <option value="48">23:30 - 00:00</option>
                  </select>

                  <label className="labelIns" htmlFor="priseType">
                    Type de prise:
                  </label>
                  <select className="inputIns" name="priseType">
                    <option value="">Sélectionnez le type de prise</option>
                    <option value="type-ef">Prise type EF</option>
                    <option value="type-2">Prise type 2</option>
                    <option value="type-ccs">Prise type Combo CCS</option>
                    <option value="type-chademo">Prise type CHAdeMO</option>
                    <option value="autre">Autre type de prise</option>
                  </select>
                </form>

                <button className="buttonIns" type="submit">
                  VALIDER
                </button>
              </section>
            )}
            <button
              type="button"
              className="boutton-down-map"
              onClick={handleInformationClick}
            >
              <img
                src={icon2}
                alt="illustration pour afficher le reste de la modal"
              />
            </button>
          </section>
        </section>
      )}
    </>
  );
}

MapComponent.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MapComponent;
