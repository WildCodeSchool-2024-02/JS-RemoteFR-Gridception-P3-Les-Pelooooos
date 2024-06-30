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
  const [confirmDelete, setConfirmDelete] = useState(null);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${API_URL}/api/users/${userId}`);

      if (response.status === 204) {
        setUser(user.filter((user1) => user1.id !== userId));
      } else {
        console.error(
          "Une erreur est survenue, impossible de supprimer le client."
        );
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue, impossible de supprimer le client.",
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
      <h1>LISTES DES UTILISATEURS</h1>
      {users.slice(0, visibleCount).map((usere) => (
        <p key={usere.id}>
          {usere.lastname} || {usere.firstname}
          <button
            type="button"
            className="supression"
            onClick={() => handleDeleteConfirm(usere.id)}
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

      {confirmDelete && (
        <section className="confirmationDelete">
          <p>Êtes-vous sûr de vouloir supprimer l'utilisateur ?</p>
         <div className="buttonD">
          <button className="buttonDelete" type="button" onClick={() => handleDelete(confirmDelete)}>
            Oui
          </button>
          <button className="buttonDelete" type="button" onClick={() => cancelDelete}>
            Non
          </button>
         </div>
        </section>
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
