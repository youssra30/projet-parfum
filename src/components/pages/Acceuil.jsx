import React from "react";
import { NavLink } from "react-router-dom"; 

export default function Acceuil() {
  return (
    <section className="hero text-center py-5">
      <div className="container">
        <h1 className="fw-bold mb-3" style={{ color: "#B76E79"}}>
          Bienvenue sur <span style={{ color: "#B76E79" }}>Gestion Produits</span>
        </h1>
        <p className="lead mb-4 text-muted">
          Gérez facilement vos produits, ajoutez-en de nouveaux et suivez leur état.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <NavLink
            to="/Produit"
            className="btn text-white"
            style={{ backgroundColor: "#7a2050", border: "none" }}
          >
            Voir les produits
          </NavLink>
          <NavLink
            to="/Contact"
            className="btn"
            style={{
              border: "2px solid #7a2050",
              color: "#7a2050",
              backgroundColor: "transparent",
            }}
          >
            Contactez-nous
          </NavLink>
        </div>

        <div className="d-flex justify-content-center">
          <img
            src="acceuil.jpg"
            alt="Luxury Perfume"
            style={{
              width: "220px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
