import { PropTypes } from "prop-types";

export default function ListUsers({ users }) {
  return (
    <section className="listUsers">
      <h1>LISTES DES UTILISATEURS</h1>
      {users?.map((user) => (
        <p key={users.id}>
          on test {user.lastname} || {user.firstname}
        </p>
      ))}
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
