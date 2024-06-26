import { useState } from "react";
import "../styles/form.scss";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <section className="container-form">
      <div className="container-message">
        {isSubmitted && (
          <div className="validation-message">
            Votre message a été envoyé avec succès !
          </div>
        )}
        <form className="formContact" onSubmit={handleSubmit}>
          <label htmlFor="Nom">Nom</label>
          <input type="text" id="nom" name="nom" defaultValue="" required />

          <label htmlFor="Prénom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            defaultValue=""
            required
          />

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            required
          />

          <label htmlFor="objet">Objet</label>
          <select className="select" name="objet" id="objet" required>
            <option value="">Choisis ton objet</option>
            <option value="information">Demande d'informations</option>
            <option value="partenariat">Demande de partenariat</option>
            <option value="autres">Autre</option>
          </select>

          <label htmlFor="Message">Message</label>
          <textarea className="message" id="message" name="message" required>
            Message
          </textarea>
          <div className="button-contact">
            <button type="submit" className="sendButon">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
