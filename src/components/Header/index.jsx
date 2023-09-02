import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import "./header.scss";

// Composant Header pour afficher l'en-tête de la page
function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={Logo} alt="Logo Kasa" />
      </Link>
      <div className="divLink active">
        <Link to="/" className="nav_link">Accueil</Link>
        <Link to="/about" className="nav_link">À propos</Link>
      </div>
    </header>
  );
}

export default Header;
