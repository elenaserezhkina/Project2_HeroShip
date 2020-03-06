import React from "react";
import "./TellUsYourName.scss";
import { useHistory } from "react-router-dom";

function TellUsYourName() {
  let tellUsYourNameHistory = useHistory();

  function tellUsYourNameHandClick() {
    tellUsYourNameHistory.push("/preferences");
  }

  const tellUsYourNameHandChange = event => {
    localStorage.setItem("name", event.target.value);
  };

  return (
    <div className="tell-us-your-name-container">
      <h1>Tell Us Your Name</h1>
      <input type="text" onInput={tellUsYourNameHandChange} />
      <button type="button" onClick={tellUsYourNameHandClick}>
        Start
      </button>
    </div>
  );
}
export default TellUsYourName;
