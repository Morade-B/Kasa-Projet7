// On importe ce dont on a besoin: modules, composant, fichier.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";


// On crée un conteneur pour une nouvelle application react,
// on récupere l'élément DOM avec l'ID "root"
// on affiche le contenu de l'application dans le conteneur
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
