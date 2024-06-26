import { useEffect, useState } from "react";
import axios from "axios";

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
          on test {car.brands_id} || {car.model}|| {car.plugs_id}
        </p>
      ))}
    </section>
  );
}
