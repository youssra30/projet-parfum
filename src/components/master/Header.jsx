import React from "react";
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom";
import Acceuil from "../../components/pages/Acceuil";
import Apropos from "../../components/pages/Apropos";
import Contact from "../../components/pages/Contact";
import Produit from "../../components/pages/Produit";
import "./Header.css";

export default function Header() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Acceuil /> },
        { path: "apropos", element: <Apropos /> },
        { path: "produit", element: <Produit /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <header className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
            <NavLink to="/apropos" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
            <NavLink to="/produit" className={({ isActive }) => isActive ? "active" : ""}>Produits</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </nav>
        </header>

        <main className="content-container">
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={route} />;
}
