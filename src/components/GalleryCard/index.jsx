import React from 'react';
import logements from '../../datas/logements.json' 
import Card from '../Card' 
import './galleryCard.scss'




function GalleryCard() {
  return (
    <div className="container">
      {logements.map((logement) => (
             <Card key={logement.id} title={logement.title} cover={logement.cover}/>
      ))}
    </div>
  );
}

export default GalleryCard
