import React, { useState } from "react";
import "./HeroInfo.scss";
import Header from "../Header/HeaderNavigation";
import Yes from "../../Pictures/like-button.svg";
import No from "../../Pictures/dislike-button.svg";

function HeroInfo() {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <React.Fragment>
      <div className="scene scene-card">
        <div className={`info-wrapper`}>
          <Header />
          {/* SIDE ONE  */}
          <div
            onClick={() => setFlipped(!isFlipped)}
            className={`picture-background card__face card__face-front card ${
              isFlipped ? "is-flipped" : null
            }`}
          >
            <div className="hero-picture-wrapper">
              <div className="picture"></div>
              <div className="name-age-button">
                <p className="hero-name">name, age</p>
                <button className="button-readmore">Read more</button>
              </div>
            </div>
            {/* SIDE TWO */}
            <div
              onClick={() => setFlipped(isFlipped)}
              className={`picture-background card__face card__face-back card ${
                isFlipped ? "is-flipped" : null
              }`}
            >
              <div className="hero-picture-wrapper">
                <div className="card-with-details">
                  <ul className="characteristic">
                    <li>Name :</li>
                    <li>Alter-egos: </li>
                    <li>Occupation : </li>
                    <li>Alignment : </li>
                    <li> Intelligence : </li>
                    <li> Power : </li>
                    <li>Eye color : </li>
                    <li> Hair color : </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="like-buttons">
            <img src={No} alt="no" className="button-no"></img>
            <img src={Yes} alt="yes" className="button-yes"></img>
          </div>
        </div>
      </div>
      {/* FOOTER */}
    </React.Fragment>
  );
}

export default HeroInfo;
