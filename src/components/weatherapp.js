import React, { useEffect, useState } from "react";
import "./css/weatherapp.css";

export default function Weatherapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [climate, setClimate] = useState("sunny");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e68107955358b846533754713ee54c2`;
      const response = await fetch(url);
      // async and await gives us promise that it means it promises to provide us something either it will wait
      //   console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
      setClimate(resJson.weather[0]);
    };
    fetchApi();
  }, [search]); // this is to prevent it from running all the time and to run only when set search shows any response

  const cli = climate.main;
  return (
    <div className="container">
      <div className="heading">
        <h1>
          Weather App
          <img
            src={require("./icons/cloudy.png")}
            alt="pic"
            className="heading-img"
          />
        </h1>
      </div>
      <div className="weather-box">
        <div className="weather-input">
          <input
            type="search"
            value={search}
            className="input-box"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {/* onChange helps to get the value in the input field */}
          {/* the event in the onChange is to target each value entered in the input box */}
        </div>
        {!city ? (
          <p>No data found</p>
        ) : (
          <div className="weather-info">
            <h1 className="weather-location">
              <i className="fa-solid fa-street-view"></i>
              {search}
              {cli === "Thunderstorm" && "Rain" ? (
                <img
                  src={require("./icons/thunderstorm.png")}
                  alt="pic"
                  className="weather-img"
                />
              ) : (
                  <img
                    src={require("./icons/cloudy.png")}
                    alt="pic"
                    className="weather-img"
                  />
                ) || cli === "Clouds" ? (
                <img
                  src={require("./icons/cloud.png")}
                  alt="pic"
                  className="weather-img"
                />
              ) : (
                  <img
                    src={require("./icons/cloudy.png")}
                    alt="pic"
                    className="weather-img"
                  />
                ) || cli === "Clear" ? (
                <img
                  src={require("./icons/sun.png")}
                  alt="pic"
                  className="weather-img"
                />
              ) : (
                <img
                  src={require("./icons/cloudy.png")}
                  alt="pic"
                  className="weather-img"
                />
              )}
              {/* this i tag is from font awsome and the link to it is added from cdnjs in the index.html just above the closing head tag  */}
            </h1>
            <h1 className="weather-temp">{city.temp}°C</h1>
            <h2 className="weather-temp-info">
              Max={city.temp_max}°C | Min={city.temp_min}°C
            </h2>
            <h3 className="weather-climate">{cli}</h3>
          </div>
        )}
        <div className="design1"></div>
        <div className="design2"></div>
        <div className="design3"></div>
      </div>
    </div>
  );
}
