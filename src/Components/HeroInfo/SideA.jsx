import React from "react";
import "./SideA.scss";

<<<<<<< HEAD
function SideA({ changeCard }) {
  // let bgstyle = {
  //   backgroundImage: `url(${Background})`
  // };
=======
function SideA({ changeCard, hero }) {
>>>>>>> 6f4ccff81ea877550e4b2b4cd5c4bbb891f8e5ca
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
