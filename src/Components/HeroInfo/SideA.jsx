import React from "react";
import "./SideA.scss";

function SideA({ changeCard, hero }) {
  let pic = hero.image.url;
  let styles = {
    backgroundImage: `url(${pic})`
  };

  // let winnerName = localStorage.setItem("winnerName");

  // const gotoFinalPage = event => {
  //   localStorage.setItem("winnerName");
  // };
  return (
    <React.Fragment>
      <div className="info-wrapper">
        <div className="hero-picture-wrapper">
          <div className="picture-background">
            <div style={styles} className="picture"></div>
            <div className="name-age-button">
              <h1 className="hero-name">{hero.name}</h1>
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
