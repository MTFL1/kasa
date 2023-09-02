import React from "react";
import "./host.scss";

// Composant HostInfo pour afficher des informations sur l'hôte
function HostInfo({ image, host }) {
  return (
    <div className="host">
      <p className="host__name">{host}</p>
      <img src={image} alt="Couverture de l'hôte" />
    </div>
  );
}

export default HostInfo;
