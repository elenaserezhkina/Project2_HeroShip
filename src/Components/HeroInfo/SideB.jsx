import React from "react";
import "./SideB.scss";

function SideB({ changeCard, hero }) {
  console.log(hero);
  return (
    <div>
      <div className="wrapper-B">
        <div className="pic-wrap-sidB">
          <div className="pic-bg-sdB">
            <div className="hero-picture-wrapper">
              <div className="card-with-details">
                <ul className="characteristic">
                  <li>meet {hero.name}, :</li>
                  <li>also known as Alter-egos: </li>
                  <li>Mostly works as {hero.work.occupation}. </li>
                  <li>Deffenetly on the {hero.biography.alignment} side. </li>
                  <li> Intelligence : {hero.powerstats.intelligence} </li>
                  <li> Power : {hero.powerstats.power} </li>
                  {/* <li>Eye color : {hero.appearance.["eye-contact"]}</li> */}
                </ul>
                <button onClick={changeCard} className="button-goback">
                  {" "}
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideB;
