import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../fichier.json";
import Collapse from "../components/Collapse";
import Erreur404 from "./Erreur404";
import Carrousel from "../components/Carrousel";


const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);


  if (!logement) {
    return <Erreur404 />;
  }

  return (
    <div className="logement-page">
      <div>
        <Carrousel 
         logement={logement}
          
        />
      </div>
      <div className="logement-header">
        <div className="logement__title">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div>
            {logement.tags.map((tag, id) => (
              <span key={id} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement__owner">
          <div className="owner__bloc">
            <div className="logement__owner__details">
            <h3>{logement.host.name}</h3>

           
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="logement__owner__badge"
              />
           </div>

            <div className="logement__owner__stars">
              {[1, 2, 3, 4, 5].map((num, id) => (
                <span key={id} className={logement.rating >= num ? "on" : "off"}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="logement__content__description">
        <div className="logement__description">
          <Collapse title="Description">
            <p className="description__content1">{logement.description}</p>
          </Collapse>
        </div>
        <div className="logement__description">
          <Collapse title="Equipements">
            <p className="description__content2">
              {logement.equipments.map((equipement) => (
                <li> {equipement}</li>
              ))}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Logement;
