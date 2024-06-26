import { useEffect, useState } from "react";
import axios from "axios";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";

export default function ListCars() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cars`)
      .then((results) => {
        setCars(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  return (
    <section className="listUsers">
      <h1>LISTES DES VÉHICULES</h1>
      {cars.map((car) => (
        <p key={car.id}>
          {car.brands_id} || {car.model} || {car.plugs_id}
          <img className="cancel" src={Cancel} alt="icons de supression" />
        </p>
      ))}
      <img src={Down} alt="icon de menu déroulant" />
    </section>
  );
}
