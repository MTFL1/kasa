import React, { useState } from "react";
import PropTypes from "prop-types";
import "./caroussel.scss";
import arrowRight from "../../assets/images/arrowRight.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

// Composant Carousel pour afficher un carrousel d'images
function Carousel(props) {
  // Récupère la liste d'images à partir des props
  const pictures = props.pictures;
  const totalPictures = pictures.length;

  // État local pour suivre l'image actuelle
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour afficher l'image précédente
  const prev = () => {
    setCurrentPicture((currentPicture - 1 + totalPictures) % totalPictures);
  };

  // Fonction pour afficher l'image suivante
  const next = () => {
    setCurrentPicture((currentPicture + 1) % totalPictures);
  };

  return (
    <section className="slides">
      {/* Mapping des images et affichage de la seule image actuellement visible */}
      {pictures.map((picture, index) => (
        <div
          className={index === currentPicture ? "slides__container" : "slides__hidden"}
          key={index}
        >
          <img className="img-caroussel" src={picture} alt="Carousel item" />
        </div>
      ))}

      {/* Affichage des boutons de navigation et du compteur si plus d'une image */}
      {pictures.length > 1 && (
        <>
          <div className="slides__controller">
            <button onClick={prev}>
              <img src={arrowLeft} alt="Fleche vers la gauche" />
            </button>
            <button onClick={next}>
              <img src={arrowRight} alt="Fleche vers la droite" />
            </button>
          </div>
          <div className="slides__counter">
            {currentPicture + 1}/{pictures.length}
          </div>
        </>
      )}
    </section>
  );
}

// Validation des props avec PropTypes
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
