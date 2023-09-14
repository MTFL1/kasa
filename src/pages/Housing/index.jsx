import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housing from "../../datas/housing.json";
import "./housing.scss";
import Carousel from "../../components/Caroussel";
import HousingTitle from "../../components/HousingTitle";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import HostInfo from "../../components/HostInfo";
import Rating from "../../components/Rating";

// Fonction Housing pour afficher la page de détails du logement
function Housing() {
  // Récupération de l'ID du logement à partir des paramètres de l'id
  const { id } = useParams();

  // Recherche du logement correspondant dans les données
  const logement = housing.find((logement) => logement.id === id);

  // Si le logement n'est pas trouvé, redirection vers la page d'erreur 404
  if (!logement) {
    return <Navigate to="/Error404" />;
  }

  return (
    <div className="housing">
      {/* Composant Carousel pour afficher les images du logement */}
      <Carousel pictures={logement.pictures} />

      <div className="housing__info">
        <div className="housing__presentation">
          {/* Composant HousingTitle pour afficher le titre et l'emplacement du logement */}
          <HousingTitle title={logement.title} location={logement.location} />
          
          {/* Composant Tags pour afficher les balises du logement */}
          <Tags tags={logement.tags} />
        </div>

        <div className="housing__rating">
          {/* Composant HostInfo pour afficher les informations sur l'hôte */}
          <HostInfo image={logement.host.picture} host={logement.host.name} />
          
          {/* Composant Rating pour afficher la notation du logement */}
          <Rating stars={logement.rating} />
        </div>
      </div>

      <div className="housing__collapses">
        {/* Composant Collapse pour afficher la description du logement */}
        <Collapse title="Description" content={logement.description} />
        
        {/* Composant Collapse pour afficher les équipements du logement */}
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
   
  );
}

export default Housing;
