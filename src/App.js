import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Introduction from "./Pages/Introduction";

function App() {
  return (
    <div>
      {/* <MainPage /> */}
      <Introduction />
    </div>
  );
}

export default App;
