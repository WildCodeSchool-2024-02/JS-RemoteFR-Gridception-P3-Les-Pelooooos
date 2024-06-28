import { useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";
import Up from "../assets/images/icons-up.png";

export default function ListUsers({ users }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const [visibleCount, setVisibleCount] = useState(5);
  const [user, setUser] = useState([]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  const handleDelete = async (userId) => {
    try {
      const image = await axios.delete(`${API_URL}/api/images/${userId}`);
      const cars = await axios.delete(`${API_URL}/api/cars/${userId}`);
      // const reservation = await axios.delete(
      //   `${API_URL}/api/reservations/${reservation_id}`
      // );
      const usersDelete = await axios.delete(`${API_URL}/api/users/${userId}`);

      if (
        image.status === 204 &&
        cars.status === 204 &&
        usersDelete.status === 204
      ) {
        setUser(user.filter((userA) => userA.id !== userId));
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue, impossible de supprimer le client."
      );
    }
  };

  return (
    <section className="listUsers">
      <h1>LISTES DES UTILISATEURS</h1>
      {users.slice(0, visibleCount).map((usere) => (
        <p key={usere.id}>
          {usere.lastname} || {usere.firstname}
          <button
            type="button"
            className="supression"
            onClick={() => handleDelete(usere.id)}
          >
            <img className="cancel" src={Cancel} alt="icon de suppression" />
          </button>
        </p>
      ))}
      {visibleCount < users.length ? (
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

ListUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      lastname: PropTypes.string.isRequired,
      fisrtname: PropTypes.string.isRequired,
    })
  ).isRequired,
};
