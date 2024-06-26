import upload from "../assets/images/icons-upload.png";

export default function MajTerminals() {
  return (
    <section className="listUsers">
      <h1>MISE A JOUR DES BORNES</h1>
      <p className="upload">
        Télécharger fichier CSV{" "}
        <img src={upload} alt="icons de téléchargement" />
      </p>
    </section>
  );
}
