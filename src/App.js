import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import MainPage from "./Pages/MainPage";
import Introduction from "./Pages/Introduction";
import QuestionPage from "./Pages/QuestionPage";
import Notfound from "./Pages/Notfound";
// import Header from "./Components/Header/HeaderNavigation";
import FinalMatch from "./Components/FinalMatch/FinalMatch";
import ChooseHero from "./Pages/ChooseHero";
import HeartAnimation from "./Pages/HeartAnimationPage";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        {/* <HeroInfo /> */}
        <Route exact path="/" component={Introduction} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/preferences" component={QuestionPage} />
        <Route exact path="/choosehero" component={ChooseHero} />
<<<<<<< HEAD
        <Route exact path="/final/:id" component={FinalMatch} />

=======
        <Route exact path="/heart" component={HeartAnimation} />
        <Route exact path="/final" component={FinalMatch} />
>>>>>>> ace878d7f495ea16b24b56a938a4f98cadd92699
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
