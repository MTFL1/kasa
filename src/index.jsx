import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import "./assets/styles/index.scss";
import Header from './components/Header';
import Footer from './components/Footer';

// Création de l'élément racine pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu des composants dans l'élément racine
root.render(
  <BrowserRouter>
    {/* Composant Header pour l'en-tête de l'application */}
    <Header />

    {/* Composant Router pour gérer les routes de l'application */}
    <Router />

    {/* Composant Footer pour le pied de page de l'application */}
    <Footer />
  </BrowserRouter>
);
