import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Importer le contexte d'authentification

const models = {
  audi: [
    "Audi e-tron",
    "Audi e-tron Sportback",
    "Audi e-tron GT",
    "Audi Q4 e-tron",
  ],
  bmw: ["BMW i3", "BMW i4", "BMW iX3", "BMW iX", "BMW i7"],
  chevrolet: ["Chevrolet Bolt EV", "Chevrolet Bolt EUV"],
  hyundai: [
    "Hyundai Kona Electric",
    "Hyundai Ioniq Electric",
    "Hyundai Ioniq 5",
  ],
  jaguar: ["Jaguar I-PACE"],
  kia: ["Kia Soul EV", "Kia Niro EV", "Kia EV6"],
  nissan: ["Nissan Leaf", "Nissan Ariya"],
  porsche: ["Porsche Taycan", "Porsche Taycan Cross Turismo"],
  tesla: [
    "Tesla Model S",
    "Tesla Model 3",
    "Tesla Model X",
    "Tesla Model Y",
    "Tesla Cybertruck",
    "Tesla Roadster",
    "Tesla Semi",
  ],
  volkswagen: [
    "Volkswagen ID.3",
    "Volkswagen ID.4",
    "Volkswagen ID. Buzz",
    "Volkswagen ID.6",
  ],
};

export default function InscriptionProfil() {
  const [carsList, setCarsList] = useState([]);

  const { login } = useAuth(); // Utiliser la fonction login du contexte d'authentification
  const navigate = useNavigate(); // Rediriger vers la page souhaitée
  const [inscription, setInscription] = useState({
    email: "",
    nom: "",
    prenom: "",
    genre: "",
    dateNaissance: "",
    ville: "",
    cp: "",
    vehicule: "",
    mp: "",
    confirmationMp: "",
  });

  const [selectedMarques, setSelectedMarques] = useState([]);
  const [selectedModeles, setSelectedModeles] = useState([]);
  const [plugTypes, setPlugTypes] = useState([]);
  const [error, setError] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setInscription({ ...inscription, [name]: value });

    if (name === "vehicule") {
      const numberOfVehicules = parseInt(value, 10) || 0;
      setSelectedMarques(Array(numberOfVehicules).fill(""));
      setSelectedModeles(Array(numberOfVehicules).fill(""));
      setPlugTypes(Array(numberOfVehicules).fill(""));
    }
  };

  const handleMarqueChange = (index, value) => {
    const newSelectedMarques = [...selectedMarques];
    newSelectedMarques[index] = value;
    setSelectedMarques(newSelectedMarques);
  };

  const handleModeleChange = (index, value) => {
    const newSelectedModeles = [...selectedModeles];
    newSelectedModeles[index] = value;
    setSelectedModeles(newSelectedModeles);
  };

  const handlePlugTypeChange = (index, value) => {
    const newPlugTypes = [...plugTypes];
    newPlugTypes[index] = value;
    setPlugTypes(newPlugTypes);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidCodePostal = (codePostal) => {
    const codePostalRegex = /^[0-9]{5}$/;
    return codePostalRegex.test(codePostal);
  };

  const handleSubmit = () => {

    const vehicles = selectedMarques.map((marque, index) => ({
      brandName: marque,
      model: selectedModeles[index],
      plugType: plugTypes[index],
    }));

    const formData = {
      // transforme les données de inscription pour correspondre aux attentes du backend, notamment en termes de nommage des champs.
      gender: inscription.genre,
      lastname: inscription.nom,
      firstname: inscription.prenom,
      birthdate: new Date(inscription.dateNaissance).toISOString().slice(0, 10), // Format ISO 8601
      email: inscription.email,
      city: inscription.ville,
      postalCode: inscription.cp,
      password: inscription.mp,
      confirmPassword: inscription.confirmationMp,
      carsOwned: parseInt(inscription.vehicule, 10),
      vehicles,
      role: 'user'
    };

    console.info("Form Data:", formData); // Log des données envoyées

    setError("");

    axios
      .post("http://localhost:3310/api/auth/register", formData)
      .then((response) => {
        login(response.data); // Connexion de l'utilisateur après l'enregistrement
        // Réinitialisation du formulaire et des états

        setInscription({
          genre: "",
          nom: "",
          prenom: "",
          dateNaissance: "",
          email: "",
          ville: "",
          cp: "",
          mp: "",
          confirmationMp: "",
          vehicule: "",
        });
        setSelectedMarques([]);
        setSelectedModeles([]);
        setPlugTypes([]);
        navigate(`/profil/${response.data.id}`); // Utilisez l'ID de l'utilisateur depuis la réponse
      })
      .catch((err) => {
        console.error("Erreur de l'enregistrement",err); // Afficher l'erreur dans la console
        setError(err.response?.data?.err || "Une erreur est survenue");
      });
  };

  const togglePopup = () => {
    if (inscription.genre === "") {
      setError("Le genre est requis.");
    } else if (inscription.nom === "") {
      setError("Le nom est requis.");
    } else if (inscription.prenom === "") {
      setError("Le prénom est requis.");
    } else if (inscription.dateNaissance === "") {
      setError("La date de naissance est requise.");
    } else if (!isValidEmail(inscription.email)) {
      setError("L'adresse e-mail est invalide.");
    } else if (inscription.ville === "") {
      setError("La ville est requise.");
    } else if (!isValidCodePostal(inscription.cp)) {
      setError("Le code postal est invalide.");
    } else if (inscription.mp === "") {
      setError("Le mot de passe est requis.");
    } else if (inscription.confirmationMp !== inscription.mp) {
      setError("Les mots de passe ne correspondent pas.");
    } else if (inscription.vehicule === "") {
      setError("Le nombre de véhicules est obligatoire.");
    } else {
      handleSubmit();
    }
  };

  const renderVehiculeForms = () => {
    const numberOfVehicules = parseInt(inscription.vehicule, 10) || 0;
    const vehiculeForms = [];

    for (let i = 0; i < numberOfVehicules; i += 1) {
      vehiculeForms.push(
        <form key={i} className="formIns">
          <h3 className="h3Ins">Véhicule {i + 1}</h3>
          <label className="labelIns" htmlFor="vehiculeMarque">
            Marque du véhicule
          </label>
          <select
            className="inputIns"
            name="vehiculeMarques"
            value={selectedMarques[i]}
            onChange={(e) => handleMarqueChange(i, e.target.value)}
          >
            <option value="">Sélectionnez votre marque</option>
            {Object.keys(models).map((marque) => (
              <option key={marque} value={marque}>
                {marque.charAt(0).toUpperCase() + marque.slice(1)}
              </option>
            ))}
          </select>

          <label className="labelIns" htmlFor="vehiculeModele">
            Modèle du véhicule
          </label>
          <select
            className="inputIns"
            name="vehiculeModele"
            value={selectedModeles[i]}
            onChange={(e) => handleModeleChange(i, e.target.value)}
          >
            <option value="">Sélectionnez votre modèle</option>
            {models[selectedMarques[i]]?.map((modele) => (
              <option key={modele} value={modele}>
                {modele}
              </option>
            ))}
          </select>

          <label className="labelIns" htmlFor="priseType">
            Type de prise
          </label>
          <select
            className="inputIns"
            name="priseType"
            value={plugTypes[i]}
            onChange={(e) => handlePlugTypeChange(i, e.target.value)}
          >
            <option value="">Sélectionnez le type de prise</option>
            <option value="type-ef">Prise type EF</option>
            <option value="type-2">Prise type 2</option>
            <option value="type-ccs">Prise type Combo CCS</option>
            <option value="type-chademo">Prise type CHAdeMO</option>
            <option value="autre">Autre type de prise</option>
          </select>
        </form>
      );
    }

    return vehiculeForms;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/cars")
      .then((res) => setCarsList(res.data));
  }, []);

  console.info(carsList);

  return (
    <section className="profilInformation">
      <form className="formIns" onSubmit={togglePopup}>
        <h2 className="h2Ins"> INFORMATION DE VOTRE PROFIL</h2>
        <label className="labelIns" htmlFor="genre">
          Genre
        </label>
        <select
          className="inputIns"
          name="genre"
          value={inscription.genre}
          onChange={(e) => handleChangeForm(e)}
        >
          <option value="">Sélectionnez votre genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
          <option value="Non communiqué">Non communiqué</option>
        </select>
        <label className="labelIns" htmlFor="nom">
          Nom
        </label>
        <input
          className="inputIns"
          type="text"
          name="nom"
          value={inscription.nom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="prenom">
          Prénom
        </label>
        <input
          className="inputIns"
          type="text"
          name="prenom"
          value={inscription.prenom}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="dateNaissance">
          Date de naissance
        </label>
        <input
          className="inputIns"
          type="date"
          name="dateNaissance"
          value={inscription.dateNaissance}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="email">
          Email
        </label>
        <input
          className="inputIns"
          type="email"
          name="email"
          value={inscription.email}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="ville">
          Ville
        </label>
        <input
          className="inputIns"
          type="text"
          name="ville"
          value={inscription.ville}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="cp">
          Code Postal
        </label>
        <input
          className="inputIns"
          type="text"
          name="cp"
          value={inscription.cp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="mp">
          Mot de passe
        </label>
        <input
          className="inputIns"
          type="password"
          name="mp"
          value={inscription.mp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="confirmationMp">
          Confirmation mot de passe
        </label>
        <input
          className="inputIns"
          type="password"
          name="confirmationMp"
          value={inscription.confirmationMp}
          onChange={(e) => handleChangeForm(e)}
        />
        <label className="labelIns" htmlFor="vehicule">
          Nombre de véhicules
        </label>
        <select
          className="inputIns"
          name="vehicule"
          value={inscription.vehicule}
          onChange={(e) => handleChangeForm(e)}
        >
          <option value="">Sélectionnez le nombre de véhicules</option>
          <option value="1">1 véhicule</option>
          <option value="2">2 véhicules</option>
          <option value="3">3 véhicules</option>
          <option value="4">4 véhicules</option>
          <option value="5">5 véhicules</option>
        </select>
      </form>

      <section className="profilVehicule">
        <h2 className="h2Ins"> INFORMATION DE VOTRE/VOS VEHICULE(S)</h2>
        {renderVehiculeForms()}
        {error && <p className="error">{error}</p>}
        <div className="button">
          <button className="buttonIns" type="submit" onClick={handleSubmit}>
            VALIDER
          </button>
        </div>
      </section>
    </section>
  );
}
