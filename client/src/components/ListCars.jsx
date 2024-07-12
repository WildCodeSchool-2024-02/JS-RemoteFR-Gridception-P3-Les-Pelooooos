import { useEffect, useState } from "react";
import axios from "axios";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";
import Up from "../assets/images/icons-up.png";

export default function ListCars() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [cars, setCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  useEffect(() => {
    axios
      .all([axios.get(`${API_URL}/api/cars`)])
      .then(
        axios.spread((carsRes) => {
          setCars(carsRes.data);
        })
      )
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
    } finally {
      setConfirmDelete(null);
    }
  };

  const handleDeleteConfirm = (userId) => {
    setConfirmDelete(userId);
  };

  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <section className="listUsers">
      <h1>LISTES DES VÉHICULES</h1>
      {cars.slice(0, visibleCount).map((car) => (
        <p key={car.id}>
          {car.brand_name} || {car.name} || {car.lastname}
          <button
            type="button"
            className="supression"
            onClick={() => handleDeleteConfirm(car.id)}
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
      {confirmDelete && (
        <section className="confirmationDelete">
          <p>Êtes-vous sûr de vouloir supprimer le véhicule ?</p>
          <div className="buttonD">
            <button
              className="buttonDelete"
              type="button"
              onClick={() => handleDelete(confirmDelete)}
            >
              Oui
            </button>
            <button
              className="buttonDelete"
              type="button"
              onClick={cancelDelete}
            >
              Non
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
