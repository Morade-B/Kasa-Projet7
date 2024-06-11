

import React, { useState } from 'react';
import logements from "../../fichier.json";



const Carousel = ({logement}) => {
  const [Index, setIndex] = useState(0);
  

  const nextSlide = () => {
    setIndex((image) =>
      image === logement.pictures.length - 1 ? 0 : image + 1
    );
  };

  const prevSlide = () => {
    setIndex((image) =>
      image === 0 ? logement.pictures.length - 1 : image - 1
    );
  };

 

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev-button">❮</button>
      <div className="carousel-slide">
     
        <img src={logement.pictures[Index]} alt="logement" />
    
      </div>
      <button onClick={nextSlide} className="carousel-button next-button">❯</button>
    </div>
  );
};

export default Carousel;
