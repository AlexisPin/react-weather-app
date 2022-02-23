import React from "react";
import "../styles/components/Card.css";

export default function Card({ data }) {
  const dateFormater = (d) => {
    let months = [
      "Janvier",
      "Fervrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    let days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <>
      {typeof data.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {data.name}, {data.sys.country}
            </div>
            <div className="date">{dateFormater(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{data.main.temp.toFixed(1)}°C</div>
            <div className="weather">
              {data.weather[0].description}
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="wthr img"
              />
            </div>
            <div className="data">
              <div className="max-temp">
                Max : {data.main.temp_max.toFixed(1)}°C
              </div>
              <div className="min-temp">
                Min : {data.main.temp_min.toFixed(1)}°C
              </div>
              <div className="pressure">Pression : {data.main.pressure} Pa</div>
              <div className="humidity">Humidité : {data.main.humidity}%</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
