import React from 'react';
import "./banner.scss";

// Composant Banner qui affiche une image et du texte
function Banner(props) {
  // Destructuration des propriétés image et text à partir des props
  const { image, text } = props;

  return (
    <div className="banner">
      <img className="banner-img" src={image} alt="" />
      <span className="banner-text">{text}</span>
    </div>
  );
}

export default Banner;
