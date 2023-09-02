import React from 'react';
import './card.scss';

// Composant Card pour afficher une carte avec un titre et une image
function Card({ id, title, image }) {
  return (
    <article key={id} className="card">
      {/* Lien vers la page de logement avec l'ID */}
      <a href={'/housing/' + id}>
        <img className="image" src={image} alt={title} />
        <h1 className="titleCard">{title}</h1>
      </a>
    </article>
  );
}

export default Card;
