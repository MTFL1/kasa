import React from 'react';
import housing from '../../datas/housing.json' 
import Card from '../Card' 
import './galleryCard.scss'



function GalleryCard() {
  return (
    <div className="containerGallery">
        {housing.map((housing) => (
            <Card image={housing.cover} id={housing.id} title={housing.title} key={housing.id}/>
        ))}
    </div>
)
}

export default GalleryCard
