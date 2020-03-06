import React from "react";
import "./FinalMatch.scss";
import Header from "../Header/HeaderNavigation";
import Chat from "../../Pictures/chat.svg";
import Profile from "../../Pictures/prof.svg";

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
            <div>
              <img className="chat" src={Chat} alt="chat"></img>
              <img className="profile" src={Profile} alt="chat"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FinalMatch;
