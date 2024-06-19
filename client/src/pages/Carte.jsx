import MapComponent from "../components/MapComponent";
import "../styles/carte.scss";

export default function Carte() {
  return (
    <div className="pageContainerMap">
      <section className="onMap">
        <p className="searchClient">Rechercher un lieu</p>
      </section>
      <section className="station">
        <h1>Nom de la station</h1>
        <p>Adresse de la borne</p>
        <p>Code Postale</p>
        <p>Ville</p>
      </section>
      <MapComponent />
    </div>
  );
}
