import { useEffect, useState } from "react";
import axios from "axios";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";

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
          <img className="cancel" src={Cancel} alt="icons de supression" />
        </p>
      ))}
      <img src={Down} alt="icon de menu déroulant" />
    </section>
  );
}
