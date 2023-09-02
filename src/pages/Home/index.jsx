import React from 'react';
import Banner from "../../components/Banner";
import imageWelcome from "../../assets/images/imageWelcome.png";
import GalleryCard from "../../components/GalleryCard";
import "./home.scss";

// fonction Home pour afficher la page d'accueil
function Home() {
  return (
    <div className="containerHome">
      {/* Composant Banner pour afficher la bannière d'accueil avec une image et un texte */}
      <Banner image={imageWelcome} text={'Chez vous, partout et ailleurs'} />
      
      {/* Composant GalleryCard pour afficher la galerie des logements */}
      <GalleryCard />
    </div>
  );
}

export default Home;
