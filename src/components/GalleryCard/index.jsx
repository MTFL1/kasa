import React from 'react';
import housing from '../../datas/housing.json';
import Card from '../Card';
import './galleryCard.scss';

// Composant GalleryCard pour afficher une galerie de cartes de logement
function GalleryCard() {
  return (
    <div className="containerGallery">
      {housing.map((housingItem) => (
        <Card image={housingItem.cover} id={housingItem.id} title={housingItem.title} key={housingItem.id} />
      ))}
    </div>
  );
}

export default GalleryCard;
