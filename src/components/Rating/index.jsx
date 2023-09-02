import React from "react";
import redStar from "../../assets/images/star-active.png";
import greyStar from "../../assets/images/star-inactive.png";
import "./rating.scss";

// Composant Rating pour afficher une notation en étoiles
function Rating({ stars }) {
  // Fonction pour afficher les étoiles actives (rouges)
  const displayRedStar = () => {
    const rate = [];
    for (let i = 0; i < stars; i++) {
      // Ajoute une image d'étoile rouge à la liste pour chaque étoile active
      rate.push(<img src={redStar} alt="Étoile rouge" key={i} />);
    }
    return rate;
  };

  // Fonction pour afficher les étoiles inactives (grises)
  const displayGreyStar = () => {
    // Calcule le nombre d'étoiles grises nécessaires pour atteindre un total de 5 étoiles
    const numberGreyStar = 5 - stars;
    const rate = [];

    for (let i = 0; i < numberGreyStar; i++) {
      // Ajoute une image d'étoile grise à la liste pour chaque étoile inactive
      rate.push(<img src={greyStar} alt="Étoile grise" key={i} />);
    }
    return rate;
  };

  return (
    <div className="rating">
      {/* Appelle les fonctions pour afficher les étoiles actives et inactives */}
      {displayRedStar()}
      {displayGreyStar()}
    </div>
  );
}

export default Rating;
