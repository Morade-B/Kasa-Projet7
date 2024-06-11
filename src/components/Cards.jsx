import React from "react";
import logements from "../../fichier.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className="container-cards">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <div className="card">
              <img src={logement.cover} alt={logement.title} />
              <div className="card__title">
                <h3>{logement.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Cards;
