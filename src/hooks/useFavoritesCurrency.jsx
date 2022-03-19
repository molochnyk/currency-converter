import { useState, useEffect } from "react";

import { DEFAULT_CURRENCY } from "../constants/defaultCurrency";

const useFavoritesCurrency = (fromCur, toCur) => {
  const [favorites, setFavorites] = useState("false");

  const setFavoritesValue = (mode, curFrom, curTo) => {
    window.localStorage.setItem("curlike", mode);
    setFavorites(mode);

    window.localStorage.setItem("curPair", JSON.stringify([curFrom, curTo]));
  };

  const toggleFavorites = () => {
    favorites === "false"
      ? setFavoritesValue("true", fromCur, toCur)
      : setFavoritesValue("false", DEFAULT_CURRENCY.from, DEFAULT_CURRENCY.to);
  };

  useEffect(() => {
    const localFavorites = window.localStorage.getItem("curlike");

    if (localFavorites) {
      setFavorites(localFavorites);
    } else {
      setFavoritesValue("false", DEFAULT_CURRENCY.from, DEFAULT_CURRENCY.to);
    }
  }, [fromCur, toCur]);

  return [favorites, toggleFavorites];
};

export default useFavoritesCurrency;
