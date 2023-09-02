import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Housing from '../pages/Housing';

// Fonction Router pour configurer les routes de l'application
function Router() {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Route pour la page "À propos" */}
      <Route path="/about" element={<About />} />

      {/* Route pour la page de détails du logement en utilisant un paramètre d'ID */}
      <Route path="/housing/:id" element={<Housing />} />

      {/* Route pour la page d'erreur 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
