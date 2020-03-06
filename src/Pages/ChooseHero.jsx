import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import HeroInfo from "../Components/HeroInfo/HeroInfo";
import Header from "../Components/Header/HeaderNavigation";

function useQuery() {
  return new URLSearchParams(useLocation().search);
} // as in https://reacttraining.com/react-router/web/example/query-parameters

function ChooseHero() {
  const [heroes, setHeroes] = useState([]);
  const [suggestedHeroes, setSuggestedHeroes] = useState([]);
  const [suggestionNumber, setSuggestionNumber] = useState(0);
  const query = useQuery();
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://www.superheroapi.com/api.php/10222024101214062/search/a"
      );
      setHeroes(result.data.results);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const power = query.get("power").split(",");

    const gender = query.get("gender").split(",");
    const character = query.get("character");

    let filteredHeroes = heroes.filter(
      hero =>
        +hero.powerstats.power >= +power[0] &&
        +hero.powerstats.power <= +power[1] &&
        hero.biography.alignment === character &&
        ((hero.appearance.gender.toLowerCase() === gender[0] &&
          hero.appearance.gender.toLowerCase() === gender[1]) ||
          hero.appearance.gender.toLowerCase() === gender[0] ||
          hero.appearance.gender.toLowerCase() === gender[1])
    );

    setSuggestedHeroes(filteredHeroes.slice(0, 10));
  }, [heroes]);

  const handleAccept = () => {
    const chosenHero = suggestedHeroes[suggestionNumber];
    history.push(`/final/${chosenHero.id}`);
  };

  return (
    <div>
      <Header />
      {heroes.length && suggestedHeroes.length ? (
        <HeroInfo
          hero={suggestedHeroes[suggestionNumber]}
          onReject={() => setSuggestionNumber(suggestionNumber + 1)}
          onAccept={handleAccept}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default ChooseHero;
