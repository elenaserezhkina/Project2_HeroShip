import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// TEST
import Header from "./Components/Header/HeaderNavigation";

// components
import MainPage from "./Pages/MainPage";
import Introduction from "./Pages/Introduction";
import QuestionPage from "./Pages/QuestionPage";
import ChooseHero from "./Pages/QuestionPage";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <Router>
      <Switch>
        <Header />
        {/* <Route exact path="/" component={MainPage} /> */}
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/preferences" component={QuestionPage} />
        <Route exact path="/choosehero" component={ChooseHero} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
