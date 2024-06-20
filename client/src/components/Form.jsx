export default function Form() {
  return (
    <section className="container-form">
      <form className="formContact" action="">
        <label htmlFor="Nom">Nom</label>
        <input type="text" id="nom" name="nom" defaultValue="" required />

        <label htmlFor="Prénom">Prénom</label>
        <input type="text" id="prenom" name="prenom" defaultValue="" required />

        <label htmlFor="Email">Email</label>
        <input type="email" id="email" name="email" defaultValue="" required />

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
    </section>
  );
}
