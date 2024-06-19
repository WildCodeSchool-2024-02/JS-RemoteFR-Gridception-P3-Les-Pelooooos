import MapComponent from "../components/MapComponent";
import "../styles/carte.scss";

export default function Carte() {
  return (
    <div className="pageContainerMap">
      <section className="topPage">
        <p className="searchClient">Rechercher un lieu</p>
      </section>
      <section className="map">
        <MapComponent />
      </section>
      <section className="station">
        <h1>Nom de la station</h1>
        <p>Adresse de la borne</p>
        <p>Code Postale - Ville</p>
      </section>
    </div>
  );
}
