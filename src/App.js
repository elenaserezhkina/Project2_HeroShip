import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Introduction from "./Pages/Introduction";

// components
import MainPage from "./Pages/MainPage";
import Introduction from "./Pages/Introduction";
import QuestionPage from "./Pages/QuestionPage";
import Notfound from "./Pages/Notfound";
// import Header from "./Components/Header/HeaderNavigation";
import HeroInfo from "./Components/HeroInfo/HeroInfo";

function App() {
  return (

    <Router>
      {/* <Header /> */}
      <Switch>
        {/* <HeroInfo /> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/preferences" component={QuestionPage} />
        <Route exact path="/choosehero" component={HeroInfo} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>

  );
}

export default App;
