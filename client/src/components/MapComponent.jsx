import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

function MapComponent({ searchQuery }) {
  const [terminals, setTerminals] = useState([]);
  const [position, setPosition] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const mapRef = useRef();
  const API_URL = import.meta.env.VITE_API_URL;

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
        const response = await axios.get(`${API_URL}/api/terminals`);
        setTerminals(response.data);
      } catch (err) {
        console.info(err);
      }
    };
    fetchTerminals();
  }, [API_URL]);

  const handleMarkerClick = (terminal) => {
    setSelectedTerminal(terminal);
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
        {terminals.map((terminal ) => (
          
            <Marker
            key={terminal.id}
              position={[terminal.latitude, terminal.longitude]}
              eventHandlers={{
                click: () => handleMarkerClick(terminal),
              }}
            />
         
        ))}
      </MapContainer>

      {selectedTerminal && (
        <section className="station">
          <h1>{selectedTerminal.name_station}</h1>
          <p>{selectedTerminal.adress_station}</p>
        </section>
      )}
    </>
  );
}

MapComponent.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MapComponent;
