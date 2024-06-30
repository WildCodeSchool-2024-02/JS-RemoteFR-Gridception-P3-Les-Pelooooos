import { useLoaderData } from "react-router-dom";
import "../styles/admin.scss";
import ListUsers from "../components/ListUsers";
import ListCars from "../components/ListCars";
import ListTerminals from "../components/ListTerminals";
import MajTerminals from "../components/MajTerminals";

export default function Administrateur() {
  const users = useLoaderData();
  return (
    <section className="admin-profil">
      <section className="admin-profil-content">
        <h1>PROFIL ADMINISTRATEUR</h1>
        <p>Bonjour {users[0].firstname}</p>
      </section>
      <ListUsers users={users} />
      <ListCars />
      <ListTerminals />
      <MajTerminals />
    </section>
  );
}
