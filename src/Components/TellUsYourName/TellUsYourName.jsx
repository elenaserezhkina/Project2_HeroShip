import React, { useState, useEffect } from "react";
import "./TellUsYourName.scss";
import { useHistory } from "react-router-dom";

function TellUsYourName() {
  const [name, setName] = useState(localStorage.setItem("nameInLocalStorage"));

  let tellUsYourNameHistory = useHistory();

  function tellUsYourNameHandClick() {
    tellUsYourNameHistory.push("/preferences");
  }

  const tellUsYourNameHandChange = event => {
    setName(event.target.value);
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
