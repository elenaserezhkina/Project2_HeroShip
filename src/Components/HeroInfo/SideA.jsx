import React from "react";
import "./SideA.scss";

function SideA({ changeCard, hero }) {
<<<<<<< HEAD
  console.log(hero);
  let pic = hero.appearance.url;
=======
  let pic = hero.image.url;
  let styles = {
    backgroundImage: `url(${pic})`
  };
>>>>>>> 3b4c0e7016c263fa47e26ab0af9d26f79d59b721
  return (
    <React.Fragment>
      <div className="info-wrapper">
        <div className="hero-picture-wrapper">
          <div className="picture-background">
<<<<<<< HEAD
            <div
              //  style={bgstyle}
              className="picture"
            ></div>
=======
            <div style={styles} className="picture"></div>
>>>>>>> 3b4c0e7016c263fa47e26ab0af9d26f79d59b721
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
