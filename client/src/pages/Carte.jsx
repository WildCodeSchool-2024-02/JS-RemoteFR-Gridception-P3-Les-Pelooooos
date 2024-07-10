import { useState } from "react";
import MapComponent from "../components/MapComponent";

import "../styles/carte.scss";

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
    </div>
  );
}
