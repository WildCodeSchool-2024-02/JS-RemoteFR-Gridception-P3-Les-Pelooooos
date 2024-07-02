import { useState } from "react";

import axios from "axios";


export default function MajTerminals() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [file, setFile] = useState(null);

  const hanfleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData);

      if (response.ok) {
        console.info("File uploaded successfully");
      } else {
        console.info("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <section className="listUsers">
      <h1>MISE A JOUR DES BORNES</h1>
      <div>
        <p className="upload">Télécharger fichier JSON </p>
        <form>
          <input type="file" onChange={hanfleFileChange} />
          <button type="submit" onClick={handleUpload}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
