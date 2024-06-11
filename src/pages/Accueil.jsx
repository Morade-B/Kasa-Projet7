import React from "react";
import Cards from "../components/Cards";
import montagne from "../assets/montagne.jpg";

function Accueil() {
  return (
    <>
      <div className="accueil">
        <div className="banner">
          <img src={montagne} alt="image banner" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Accueil;
