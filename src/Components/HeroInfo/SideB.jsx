import React from "react";
import "./SideB.scss";

function SideB({ changeCard }) {
  return (
    <div>
      <div className="wrapper-B">
        <div className="pic-wrap-sidB">
          <div className="pic-bg-sdB">
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
