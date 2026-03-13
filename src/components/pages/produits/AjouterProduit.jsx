import React, { useState } from "react";

export default function AjouterProduit() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hna t9dar tdir API call bach tzid produit f backend
    const nouveauProduit = { nom, description, image };
    console.log("Produit ajouté :", nouveauProduit);
    alert("Produit ajouté avec succès !");
    
    // Reset form
    setNom("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Ajouter un Nouveau Produit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom du Produit</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">URL de l'image</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#d63384", border: "none" }}>
          Ajouter Produit
        </button>
      </form>
    </div>
  );
}
