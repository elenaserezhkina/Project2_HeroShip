import React from "react";
import AgeSlider from "./Sliders/AgeSlider";
import CharacterSlider from "./Sliders/CharacterSlider";
import GenderCheck from "./Sliders/GenderCheck";
import "./SelectPreferences.scss";

function SelectPreferences() {
  return (
    <div className="preferencesContainer">
      <div>
        <CharacterSlider />
      </div>
      <div>
        <AgeSlider />
      </div>
      <div>
        <GenderCheck />
      </div>
    </div>
  );
}

export default SelectPreferences;
