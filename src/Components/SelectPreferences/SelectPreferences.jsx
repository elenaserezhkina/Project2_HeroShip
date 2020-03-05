import React from "react";
import AgeSlider from "./Sliders/AgeSlider";
import CharacterSlider from "./Sliders/CharacterSlider";
import GenderCheck from "./Sliders/GenderCheck";
import LetsGoButton from "../SurpriseMe/LetsGoButton";
import "./SelectPreferences.scss";

function SelectPreferences() {
  return (
    <div className="preferencesContainer">
      <div className="preferencesRow">
        <div className="preferencesTitle">character</div>
        <div className="preferencesInput">
          <CharacterSlider />
        </div>
      </div>
      <div className="preferencesRow">
        <div className="preferencesTitle">age</div>
        <div className="preferencesInput">
          <AgeSlider />
        </div>
      </div>
      <div className="preferencesRow">
        <div className="preferencesTitle">gender</div>

        <div className="preferencesInput">
          <GenderCheck />
        </div>
      </div>
      <LetsGoButton />
    </div>
  );
}

export default SelectPreferences;
