import React from "react";
import "./SideA.scss";

function SideA({ changeCard, hero }) {
  console.log(hero);
  let pic = hero.appearance.url;
  return (
    <React.Fragment>
      <div className="info-wrapper">
        <div className="hero-picture-wrapper">
          <div className="picture-background">
            <div
              //  style={bgstyle}
              className="picture"
            ></div>
            <div className="name-age-button">
              <p className="hero-name">{hero.name}</p>
              <button onClick={changeCard} className="button-readmore">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideA;
