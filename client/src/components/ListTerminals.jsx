import { useEffect, useState } from "react";
import axios from "axios";

export default function ListTerminals() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/terminals`)
      .then((results) => {
        setTerminals(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  return (
    <section className="listUsers">
      <h1>LISTES DES BORNES</h1>
      {terminals.map((terminal) => (
        <p key={terminal.id}>
          {terminal.name_station} || {terminal.adress_station} ||{" "}
          {terminal.number_plugs}
        </p>
      ))}
    </section>
  );
}
