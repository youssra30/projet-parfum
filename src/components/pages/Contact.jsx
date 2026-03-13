import React from "react";
export default function Contact() {
  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4" style={{ color: "#d63384" }}>
        Contactez-nous
      </h2>

      <form>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input type="text" className="form-control" id="nom" placeholder="Votre nom" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Votre email" />
        </div>

        <div className="mb-3">
          <label htmlFor="sujet" className="form-label">Sujet</label>
          <input type="text" className="form-control" id="sujet" placeholder="Sujet de votre message" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary px-5"
            style={{ backgroundColor: "#d63384", border: "none" }}
          >
            Envoyer
          </button>
        </div>
      </form>

      
    </div>
  );
}
