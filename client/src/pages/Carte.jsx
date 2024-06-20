import { useState } from "react";
import MapComponent from "../components/MapComponent";

export default function Carte() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(event.target.value);
    }
  };

  return (
    <div className="pageContainerMap">
      <section className="topPage">
        <input
          type="text"
          className="searchClient"
          placeholder="Rechercher un lieu"
          onKeyDown={handleSearch}
        />
      </section>
      <section className="map">
        <MapComponent searchQuery={searchQuery} />
      </section>
      <section className="station">
        <h1>Nom de la station</h1>
        <p>Adresse de la borne</p>
        <p>Code Postale - Ville</p>
      </section>
    </div>
  );
}
