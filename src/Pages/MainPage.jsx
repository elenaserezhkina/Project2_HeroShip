import React from "react";
import TellUsYourName from "../Components/TellUsYourName/TellUsYourName";
import MainPagePhoto from "../Pictures/Superheroes.svg";
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main-page-container">
      <div
        className="main-page-img"
        style={{ backgroundImage: `url(${MainPagePhoto})` }}
      />
      <TellUsYourName />
    </div>
  );
}
export default MainPage;
