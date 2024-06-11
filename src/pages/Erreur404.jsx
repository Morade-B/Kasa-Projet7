import React from "react";
import { Link } from "react-router-dom";

function Erreur404() {
  return (
    <>
      <div className="erreur">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}

export default Erreur404;
