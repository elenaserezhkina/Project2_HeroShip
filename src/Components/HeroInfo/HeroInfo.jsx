import React from "react";
import "./HeroInfo.scss";
import Header from "../Header/HeaderNavigation";
import Yes from "../../Pictures/like-button.svg";
import No from "../../Pictures/dislike-button.svg";

function HeroInfo() {
  return (
    <div className="info-wrapper">
      <Header />
      <div className="picture-background">
        <div className="hero-picture-wrapper">
          <div className="picture"></div>
          <div className="name-age-button">
            <p className="hero-name">name, age</p>
            <button className="button-readmore">Read more</button>
          </div>
        </div>
      </div>
      <div className="like-buttons">
        <img src={No} alt="no" className="button-no"></img>
        <img src={Yes} alt="yes" className="button-yes"></img>
      </div>
    </div>
  );
}

export default HeroInfo;
