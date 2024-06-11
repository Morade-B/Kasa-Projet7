

import React, { useState } from 'react';
import logements from "../../fichier.json";
import Left_arrow from "../assets/left_arrow.png";
import Right_arrow from "../assets/right_arrow.png";



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
