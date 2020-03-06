import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import HeroInfo from "../Components/HeroInfo/HeroInfo";
import Header from "../Components/Header/HeaderNavigation";
import HeartLoadingAnimation from "../Components/HeartAnimation/HeartLoadingAnimation";
import "./ChooseHero.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
} // as in https://reacttraining.com/react-router/web/example/query-parameters

function ChooseHero() {
  const [heroes, setHeroes] = useState([]);
  const [suggestedHeroes, setSuggestedHeroes] = useState([]);
  const [suggestionNumber, setSuggestionNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const history = useHistory();
  useEffect(() => {
    console.log("useEffect");
    function fetchData() {
      fetch(
        //taking heroes whose name has letter a
        "https://www.superheroapi.com/api.php/10222024101214062/search/a"
      )
        .then(data => data.json())
        .then(result => {
          console.log("result", result);
          setHeroes(result.results);
        })
        .then(setTimeout(() => setLoading(false), 2500));
    }
    fetchData();
  }, []);
  useEffect(() => {
    const power = query.get("power").split(",");
    console.log(query.get("gender"));
    const gender = query.get("gender") ? query.get("gender").split(",") : [];
    const character = query.get("character");

    let filteredHeroes = heroes.filter(hero => {
      return (
        +hero.powerstats.power >= +power[0] &&
        +hero.powerstats.power <= +power[1] &&
        hero.biography.alignment === character &&
        gender.length &&
        gender.includes(hero.appearance.gender.toLowerCase())
      );
    });
    // TODO get random heroes
    setSuggestedHeroes(filteredHeroes.slice(0, 20));
  }, [heroes]);
  const handleAccept = () => {
    const chosenHero = suggestedHeroes[suggestionNumber];
    history.push(`/final?id=${chosenHero.id}`);
  };
  // TODO handle when no suggestions, handle when ran out of suggestions
  //   heroes.length && suggestedHeroes.length = 0
  console.log(suggestedHeroes.length);
  return (
    <div>
      <Header />
      {loading ? (
        <div className="choose-hero-loading">
          <h1>Loading...</h1>
          <HeartLoadingAnimation />
        </div>
      ) : (
        <HeroInfo
          hero={suggestedHeroes[suggestionNumber]}
          onReject={() => setSuggestionNumber(suggestionNumber + 1)}
          onAccept={handleAccept}
        />
        // "Loading"
      )}
    </div>
  );
}

export default ChooseHero;
