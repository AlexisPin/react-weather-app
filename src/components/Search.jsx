import React, { useState } from "react";
import Card from "./Card";
import "../styles/components/Search.css";
import axios from "axios";

const Search = () => {
  const api = {
    key: "182459b9b68a2b9e527af6cf1310ef80",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    return setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    if (e.key == "Enter") {
      axios
        .get(
          `${api.base}weather?q=${query}&units=metric&lang=fr&APPID=${api.key}`
        )
        .then((res) => res.data)
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "wrapper warm"
            : "wrapper"
          : "wrapper"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Rechercher..."
            onChange={handleChange}
            onKeyPress={handleSearch}
            value={query}
          />
        </div>
        <Card data={weather} />
      </main>
    </div>
  );
};

export default Search;
