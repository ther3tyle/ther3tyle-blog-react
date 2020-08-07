import React from "react";
import Aux from "../../hoc/Aux/Aux";
import "./Home.css";

import arrow from "../../assets/images/arrow.svg";
import doggy from "../../assets/images/bae-dog-01@3x.png";
import backgroundLetters from "../../assets/images/bgLetters.svg";

const Home = () => (
  <Aux>
    <div className="background-images">
      <img src={backgroundLetters} className="background-image-text" alt="backgroundLetters"/>
      <img src={arrow} className="background-image-arrow" alt="arrow"/>
      <img src={doggy} className="background-image-doggy" alt="doggy"/>
    </div>
  </Aux>
);

export default Home;
