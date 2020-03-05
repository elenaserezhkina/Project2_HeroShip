import React from "react";
import HeaderNavigation from "../Components/Header/HeaderNavigation.jsx";
import SelectPreferences from "../Components/SelectPreferences/SelectPreferences.jsx";
import "./QuestionPage.scss";
import SurpriseMeButton from "../Components/SurpriseMe/SurpriseMeButton.jsx";

function QuestionPage() {
  return (
    <div className="questionPageBackground">
      <HeaderNavigation />
      <h2>user name, who are you looking for ?</h2>
      <SurpriseMeButton />
      <p className="alignCenter">OR</p>
      <div className="centerQuestions">
        <SelectPreferences />
      </div>
    </div>
  );
}

export default QuestionPage;
