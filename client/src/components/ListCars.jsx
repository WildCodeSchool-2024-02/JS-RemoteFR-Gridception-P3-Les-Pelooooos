import { useEffect, useState } from "react";
import axios from "axios";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";
import Up from "../assets/images/icons-up.png";

export default function ListCars() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [cars, setCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cars`)
      .then((results) => {
        setCars(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  const handleDelete = async (carId) => {
    try {
      const response = await axios.delete(`${API_URL}/api/cars/${carId}`);

      if (response.status === 204) {
        setCars(cars.filter((car) => car.id !== carId));
      } else {
        console.error(
          "Une erreur est survenue, impossible de supprimer le véhicule."
        );
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue, impossible de supprimer le véhicule.",
        error
      );
    }
  };

  return (
    <section className="listUsers">
      <h1>LISTES DES VÉHICULES</h1>
      {cars.slice(0, visibleCount).map((car) => (
        <p key={car.id}>
          {car.brands_id} || {car.model} || {car.plugs_id}
          <button
            type="button"
            className="supression"
            onClick={() => handleDelete(car.id)}
          >
            <img className="cancel" src={Cancel} alt="icons de supression" />
          </button>
        </p>
      ))}
      {visibleCount < cars.length ? (
        <button type="button" className="showMore" onClick={showMore}>
          <img
            src={Down}
            className="imgListUser"
            alt="icon de menu déroulant"
          />
        </button>
      ) : (
        <button type="button" className="showMore" onClick={showDown}>
          <img src={Up} className="imgListUser" alt="icon de menu déroulant" />
        </button>
      )}
    </section>
  );
}
