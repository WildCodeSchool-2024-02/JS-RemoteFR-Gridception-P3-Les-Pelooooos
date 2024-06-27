import { useState } from "react";
// import axios from "axios";
import { PropTypes } from "prop-types";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";
import Up from "../assets/images/icons-up.png";

export default function ListUsers({ users }) {
  // const API_URL = import.meta.env.VITE_API_URL;
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  // const handleDelete = (user_id) => {
  //   console.log(user_id);
  //   axios.delete(`${API_URL}/api/users/${user_id}`).then((results) => {
  //     if (results.status === 204) {
  //       setUser(user.filter((user) => user.id !== user_id));
  //     } else {
  //       console.error(
  //         "Une erreur est survenue, impossible de supprimer le client."
  //       );
  //     }
  //   });
  // };

  return (
    <section className="listUsers">
      <h1>LISTES DES UTILISATEURS</h1>
      {users.slice(0, visibleCount).map((user) => (
        <p key={user.id}>
          {user.lastname} || {user.firstname}
          <button
            type="button"
            className="supression"
            // onClick={() => handleDelete(user.id)}
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
