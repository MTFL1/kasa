import React from "react";
import "./tags.scss";

// Composant Tags pour afficher des balises (tags)
function Tags({ tags }) {
  return (
    <div className="tag">
      {/* Utilisation de la méthode map pour afficher chaque tag */}
      {tags.map((tag, i) => {
        return (
          <span className="tag__name" key={i}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
