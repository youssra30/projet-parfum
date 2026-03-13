import React from "react";

export default function Apropos() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-3" style={{ color: "#7a2050"  }}>
        À propos de <span style={{ color: "#7a2050" }}>Gestion Produits</span>
      </h2>
      <p className="text-center text-muted mb-5">
        Une application moderne et intuitive pour gérer vos produits en toute simplicité.
      </p>

      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="acceuil.jpg"
            alt="Luxury Perfume"
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#7a2050" }}>
            Notre mission
          </h4>
          <p className="text-muted">
            Simplifier la gestion quotidienne de vos produits grâce à une interface ergonomique,
            des fonctionnalités puissantes et un design agréable.
          </p>

          <h5 className="fw-bold" style={{ color: "#9b2b6a" }}>
            Nos valeurs
          </h5>
          <ul className="list-unstyled text-muted">
            <li> Simplicité d'utilisation</li>
            <li> Performance et rapidité</li>
            <li> Design clair et cohérent</li>
            <li> Sécurité des données</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
