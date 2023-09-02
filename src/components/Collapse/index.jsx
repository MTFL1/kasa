import React, { useState } from "react";
import "./collapse.scss";
import arrowDown from "../../assets/images/arrowDown.svg";
import arrowUp from "../../assets/images/arrowUp.svg";

// Composant Collapse pour afficher un contenu masqué
function Collapse({ content, title }) {
  // État local pour suivre si le contenu est ouvert ou fermé
  const [isOpen, setOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture du contenu
  const setOpenCollapse = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="collapse_container" onClick={setOpenCollapse}>
      <div className="collapse_container__title">
        <h1>{title}</h1>
        {isOpen ? (
          <img src={arrowDown} alt="Une flèche vers le bas" />
        ) : (
          <img src={arrowUp} alt="Une flèche vers le haut" />
        )}
      </div>
      {isOpen && (
        <div className="collapse_container__content">
          {/* Vérification si le contenu est un tableau ou une chaîne de caractères */}
          {Array.isArray(content) ? (
            <ul className="collapse_container__content--list">
              {/* Mapping des éléments du tableau pour afficher une liste */}
              {content.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
