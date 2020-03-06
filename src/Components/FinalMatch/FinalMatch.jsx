import React from "react";
import "./FinalMatch.scss";
import Header from "../Header/HeaderNavigation";
import Chat from "../../Pictures/chat.svg";
import Profile from "../../Pictures/prof.svg";
import HeartAnimation from "../HeartAnimation/HeartAnimation";

function FinalMatch() {
  const [animation, setAnimation] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  });
  return animation ? (
    <HeartAnimation />
  ) : (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <p className="winner">
          it's <br />
          <h1>SUPERMAN</h1>
        </p>

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
