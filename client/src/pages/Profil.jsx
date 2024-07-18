import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext";
import Vehicules from "../components/Véhicules";
import Reservation from "../components/Reservation";

import "../styles/profil.scss";
import "../styles/template.scss";

export default function Profil() {
  const users = useLoaderData();

  const [car, setCar] = useState([]);
  const [reservation, setReservation] = useState([]);

  const { auth, logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const getDatas = async () => {
      const carFromUser = await axios.get(
        `http://localhost:3310/api/users/${users.id}/cars`
      );

      setCar(carFromUser.data);

      const reservationFromUser = await axios.get(
        `http://localhost:3310/api/reservations/cars/${carFromUser.data.id}`
      );

      setReservation(reservationFromUser.data);
    };

    getDatas();
  }, [users]);

  const handleLogout = () => {
    logout();
    navigate("/connexion");
  };

  if (!auth) {
    return <p>Veuillez vous connecter pour accéder à cette page.</p>;
  }

  return (
    <>
      <section className="header-profil">
        <section className="header-profil-content">
          <h1>PROFIL</h1>
          <p>Bonjour {users.firstname}</p>
        </section>
      </section>

      <section className="container">
        <Reservation reservation={reservation} />

        <Vehicules car={car} />

        <button className="buttonLogout" type="button" onClick={handleLogout}>
          DÉCONNEXION
        </button>
      </section>
    </>
  );
}
