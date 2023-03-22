import React from "react";
import "../../styles/hero.css";
const Hero = ({imageSrc}) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image"/>
      <h1 className="hero__title"> WHERE WE CARE ABOUT YOU 🤍</h1>
    </div>
  )
}

export default Hero;
