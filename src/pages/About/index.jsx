import React from "react";
import AboutList from "../../components/AboutList";
import mountainPicture from "../../assets/images/aboutBanner.png";
import Banner from "../../components/Banner";
import './about.scss';

// Fonction About pour afficher la page "À propos"
function About() {
  return (
    <main>
      {/* Composant Banner pour afficher une bannière avec une image */}
      <Banner image={mountainPicture} alt={"Une vue sur un paysage de montagne"} />
      {/* Composant AboutList pour afficher la liste d'éléments "À propos" */}
      <AboutList className="aboutList" />
    </main>
  );
}

export default About;
