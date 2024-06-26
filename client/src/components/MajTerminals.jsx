import upload from "../assets/images/icons-upload.png";

export default function MajTerminals() {
  return (
    <section className="listUsers">
      <h1>MISE A JOUR DES BORNES</h1>
      <p>Télécharger fichier CSV</p>
      <img src={upload} alt="icons de téléchargement" />
    </section>
  );
}
