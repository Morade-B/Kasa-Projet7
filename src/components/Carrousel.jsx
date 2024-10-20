

import React, { useState } from 'react';
import Left_arrow from "../assets/left_arrow.png";
import Right_arrow from "../assets/right_arrow.png";


// On utilise 'useState' pour gérer l'index de l'image actuellement affichée 
const Carousel = ({logement}) => {
  const [Index, setIndex] = useState(0);
  
// Si l'index atteint la dernière image, il revient a la première.
  const nextSlide = () => {
    setIndex((image) =>
      image === logement.pictures.length - 1 ? 0 : image + 1
    );
  };

  // si l'index est à la première image, il passe à la dernière image.
  const prevSlide = () => {
    setIndex((image) =>
      image === 0 ? logement.pictures.length - 1 : image - 1
    );
  };

 // Les flèches et la numérotation ne s'affichent que si le logement a plus d'une image.

  return (
    <div className="carousel">
      {logement.pictures.length > 1 && (
      <button onClick={prevSlide} className="carousel-button prev-button"> <img src={Left_arrow} alt="left arrow" /></button>
    )}
      <div className="carousel-slide">
     
        <img src={logement.pictures[Index]} alt="logement" />

        {logement.pictures.length > 1 && (
     <span className='slide-number'> {Index + 1 } / {logement.pictures.length}</span>
    )}
      </div>
      {logement.pictures.length > 1 && (
      <button onClick={nextSlide} className="carousel-button next-button"><img src={Right_arrow} alt="right arrow" /></button>
    )}
    </div>

  );
};

export default Carousel;
