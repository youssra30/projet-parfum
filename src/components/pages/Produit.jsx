import React from "react";
import CardProduit from "./produits/CardProduit";


export default function Produit() {
  const produits = [
    {
      id: 1,
      image: "Parfum Floral.png",
      nom: "Parfum Floral",
      description: "Un parfum doux et élégant avec des notes de jasmin."
    },
    {
      id: 2,
      image: "Parfum Oriental.jpg",
      nom: "Parfum Oriental",
      description: "Notes épicées et orientales, parfait pour les soirées."
    },
    {
      id: 3,
      image: "Parfum Fruité.png",
      nom: "Parfum Fruité",
      description: "Un parfum frais avec des notes d’agrumes et de fruits rouges."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: "#d63384" }}>
        Nos Produits
      </h2>

      <div className="row">
        {produits.map((p) => (
          <CardProduit
            key={p.id}
            image={p.image}
            nom={p.nom}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
}
