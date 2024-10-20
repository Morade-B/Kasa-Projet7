// On importe les composant nécessaires.
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Erreur404 from "./pages/Erreur404";
import Logement from "./pages/Logement";


// Pour chaque route un composant est rendu.
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<Erreur404 />} />
          <Route path="logement/:id" element={<Logement />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
