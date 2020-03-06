// import AgeSlider from "./Sliders/AgeSlider";

import React, { useState } from "react";
import Slider from "./Sliders/Slider";

import CharacterSlider from "./Sliders/CharacterSlider";
import GenderCheck from "./Sliders/GenderCheck";
import LetsGoButton from "../SurpriseMe/LetsGoButton";
import "./SelectPreferences.scss";
import { useHistory } from "react-router-dom";

function SelectPreferences() {
  const [power, setPower] = useState([0, 100]);
  const [character, setCharacter] = useState();
  const [gender, setGender] = useState({
    male: true,
    female: true
  });

  //to redirect to another page
  const history = useHistory();

  function submitPreferences() {
    //redirect to choosehero with selected values

    //Object.keys return all keys from object and we filter them
    const selectedGender = Object.keys(gender).filter(key => gender[key]);
    history.push(
      `/choosehero?power=${power}&character=${character}&gender=${selectedGender}`
    );
  }

  return (
    <div className="preferencesContainer">
      <div className="preferencesRow">
        <div className="preferencesTitle">character</div>
        <div className="preferencesInput">
          <CharacterSlider
            value={character}
            handleChange={event => {
              setCharacter(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="preferencesRow">
        <div className="preferencesTitle">power</div>
        <div className="preferencesInput">
          <Slider
            value={power}
            handleChange={(event, newValue) => setPower(newValue)}
          />
        </div>
      </div>
      <div className="preferencesRow">
        <div className="preferencesTitle">gender</div>

        <div className="preferencesInput">
          <GenderCheck
            value={gender}
            handleChange={event => {
              setGender({
                ...gender,
                [event.target.value]: event.target.checked
              });
            }}
          />
        </div>
      </div>
      <LetsGoButton onClick={submitPreferences} />
    </div>
  );
}

export default SelectPreferences;
