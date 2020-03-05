import React from "react";
import "./FinalMatch.scss";
import Header from "../Header/HeaderNavigation";
import Chat from "../../Pictures/chat.svg";

function FinalMatch() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <h1 className="winner">
          it's <br />
          SUPERMAN
        </h1>

        <div className="background-white">
          <div className="picture">
            <img src={Chat} alt="chat"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FinalMatch;
