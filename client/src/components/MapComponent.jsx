import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import PropTypes from "prop-types";

function MapComponent({ searchQuery }) {
  const [position, setPosition] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);
  const mapRef = useRef();

  // eslint-disable-next-line no-underscore-dangle
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
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

  if (!position) {
    return <div>Chargement de votre position...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="rounded-map"
      style={{ height: "100vh", width: "85vw" }}
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
    </MapContainer>
  );
}

MapComponent.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MapComponent;
