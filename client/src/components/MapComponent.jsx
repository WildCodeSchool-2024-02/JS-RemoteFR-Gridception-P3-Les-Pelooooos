import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const [position, setPosition] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);

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

  if (!position) {
    return <div>Chargement de votre position...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="rounded-map"
      style={{ height: "100vh", width: "85vw" }}
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

export default MapComponent;
