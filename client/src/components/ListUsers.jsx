import { PropTypes } from "prop-types";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";

export default function ListUsers({ users }) {
  return (
    <section className="listUsers">
      <h1>LISTES DES UTILISATEURS</h1>
      {users?.map((user) => (
        <p key={users.id}>
          {user.lastname} || {user.firstname}
          <img className="cancel" src={Cancel} alt="icons de supression" />
        </p>
      ))}
      <img src={Down} alt="icon de menu déroulant" />
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
