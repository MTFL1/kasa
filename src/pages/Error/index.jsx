import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';


// Fonction Error pour afficher la page d'erreur 404
function Error() {
  return (
      <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Oups ! La page que vous demandez n'existe pas.</p>
      <Link className="error__link" to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
