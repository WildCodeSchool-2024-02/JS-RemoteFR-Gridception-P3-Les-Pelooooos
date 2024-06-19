import { useState } from "react";
import "../scss/Inscription.scss";

export default function InscriptionProfil() {
    const [inscription, setInscription] = useState({
        email: "",
      });
    
      const [error, setError] = useState("");
    
      const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setInscription({ ...inscription, [name]: value });
      };
    
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      
    
      const togglePopup = () => {
        if (!isValidEmail(inscription.email)) {
          setError("L'adresse e-mail est invalide.");
        } else {
          setError("");
          setInscription({
            email: "",
          });
        }
      };

  return (
    <section className="profilInformation">
      <h2> INFORMATION DE VOTRE PROFIL</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email *"
          name="email"
          value={inscription.email}
          onChange={(e) => handleChangeForm(e)}
        />

      </form>
      {error && <p className="error">{error}</p>}
      <button className="buttonIns" type="submit" onClick={togglePopup}>
        VALIDER
      </button>

    </section>
  );
}
