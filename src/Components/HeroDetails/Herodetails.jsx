import React from "react";
import "./HeroDetails.scss";

import Header from "../Header/HeaderNavigation";

function HeroInfo() {
  return (
    <div className="details-wrapper">
      <Header />
      <div className="card-with-details"></div>
    </div>
  );
}

export default HeroInfo;
