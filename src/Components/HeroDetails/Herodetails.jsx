import React from "react";
import "./HeroDetails.scss";

import Header from "../Header/HeaderNavigation";

function HeroInfo() {
  return (
    <div className="details-wrapper">
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
  );
}

export default HeroInfo;
