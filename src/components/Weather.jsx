import React, { useState } from "react";
import Search from "./Search";
import { Hourglass } from "react-loader-spinner";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d8634e1b3e613138fe7a90418f3b73e4&units=metric`
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className="container">
        {loading && <Hourglass />}
        {weatherData ? (
          <div>
            <p>{weatherData?.name}</p>
            <p>{weatherData?.main.temp} C</p>
            <ul>
              <li>{weatherData?.main.humidity}</li>
              <li>{weatherData?.main.pressure}</li>
              <li> {weatherData?.wind.speed}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
