import React from "react";
import montagne from "../assets/montagne.jpg";

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={montagne} alt="image banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export default Banner;
