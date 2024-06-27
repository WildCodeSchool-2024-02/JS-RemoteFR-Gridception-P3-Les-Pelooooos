import { useState } from "react";
import { PropTypes } from "prop-types";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";

export default function ListUsers({ users }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <section className="listUsers">
      <h1>LISTES DES UTILISATEURS</h1>
      {users.slice(0, visibleCount).map((user) => (
        <p key={user.id}>
          {user.lastname} || {user.firstname}
          <img className="cancel" src={Cancel} alt="icon de suppression" />
        </p>
      ))}
      {visibleCount < users.length && (
        <button type="button" className="showMore" onClick={showMore}>
          <img src={Down} alt="icon de menu déroulant" />
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
