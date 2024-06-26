import { useLoaderData } from "react-router-dom";
import "../styles/admin.scss";
import ListUsers from "../components/ListUsers";

export default function Administrateur() {
  const users = useLoaderData();
  return (
    <section className="admin-profil">
      <section className="admin-profil-content">
        <h1>PROFIL ADMINISTRATITEUR</h1>
        <p>Bonjour {users[0].firstname}</p>
      </section>
      <ListUsers users={users} />
    </section>
  );
}
