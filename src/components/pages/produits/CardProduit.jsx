import { useNavigate } from "react-router-dom";

export default function CardProduit({ image, nom, description }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-0">
        <img
          src={image}
          className="card-img-top"
          alt={nom}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text text-muted">{description}</p>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#d63384", border: "none" }}
            onClick={() => navigate("/ajouter-produit")}
          >
            Voir Détails
          </button>
        </div>
      </div>
    </div>
  );
}
