import { useEffect, useState } from "react";
import axios from "axios";
import Cancel from "../assets/images/icons-cancel.png";
import Down from "../assets/images/icons-down.png";
import Up from "../assets/images/icons-up.png";

export default function ListTerminals() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [terminals, setTerminals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showDown = () => {
    setVisibleCount(5);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/terminals`)
      .then((results) => {
        setTerminals(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  const handleDelete = async (terminalId) => {
    try {
      const response = await axios.delete(`${API_URL}/api/terminals/${terminalId}`);

      if (response.status === 204) {
        setTerminals(terminals.filter((terminal) => terminal.id !== terminalId));
      } else {
        console.error(
          "Une erreur est survenue, impossible de supprimer la borne."
        );
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue, impossible de supprimer la brone.",
        error
      );
    } finally {
      setConfirmDelete(null);
    }
  };
  const handleDeleteConfirm = (terminalId) => {
    setConfirmDelete(terminalId);
  };
  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <section className="listUsers">
      <h1>LISTES DES BORNES</h1>
      {terminals.slice(0, visibleCount).map((terminal) => (
        <p key={terminal.id}>
          {terminal.name_station} || {terminal.adress_station} ||{" "}
          {terminal.number_plugs}
          <button type="button" className="supression" onClick={() => handleDeleteConfirm(terminal.id)}>
            <img className="cancel" src={Cancel} alt="icons de supression" />
          </button>
        </p>
      ))}
      {visibleCount < terminals.length ? (
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
          <p>Êtes-vous sûr de vouloir supprimer le véhicule ?</p>
          <div className="buttonD">
            <button
              className="buttonDelete"
              type="button"
              onClick={() => handleDelete(confirmDelete)}
            >
              Oui
            </button>
            <button
              className="buttonDelete"
              type="button"
              onClick={cancelDelete}
            >
              Non
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
