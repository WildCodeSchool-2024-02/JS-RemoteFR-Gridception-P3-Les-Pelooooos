import { useEffect, useState } from "react";
import "../styles/admin.scss";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import ListUsers from "../components/ListUsers";
import ListCars from "../components/ListCars";
import ListTerminals from "../components/ListTerminals";
import MajTerminals from "../components/MajTerminals";

export default function Administrateur() {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    };

    if (auth) {
      fetchUsers();
    }
  }, [auth]);

  if (!auth) {
    return <p>Veuillez vous connecter pour accéder à cette page.</p>;
  }

  return (
    <section className="admin-profil">
      <section className="admin-profil-content">
        <h1>PROFIL ADMINISTRATEUR</h1>
        <p>Bonjour, {auth.user.firstName}</p>
      </section>
      <ListUsers users={users} />
      <ListCars />
      <ListTerminals />
      <MajTerminals />
    </section>
  );
}
