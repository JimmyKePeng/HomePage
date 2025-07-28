import { useEffect, useState } from "react";
import "./style.css";
export default function Location({ weather }) {
  const [tempK, setTemp] = useState(0);
  const [time, setTime] = useState(null);
  const [tempF, setTempF] = useState(true);
  useEffect(() => {
    setTemp(weather.main.temp);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    setTime(new Date().toLocaleString(undefined, options));
  }, [weather]);

  function getTemp(tempK) {
    if (tempF) {
      return Math.round(((tempK - 273.15) * 9) / 5 + 32); // Fahrenheit
    } else {
      return Math.round(tempK - 273.15); // Celsius
    }
  }
  return (
    <div className="location-div">
      <h1 className="city">
        {weather.name}, {weather.sys.country}
      </h1>
      <h4>{time}</h4>

      <h1
        className="temp"
        onClick={() => setTempF((prev) => !prev)}
        // value={tempK}
      >
        {getTemp(tempK)} {tempF ? "F" : "C"}
      </h1>

      {/* <h1>{weather.weather[0].main}</h1> */}
      <img
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      />

      <div className="sub-div">
        <div className="wind-speed-div">
          <h3>{weather.wind.speed}</h3>
          <h3>wind speed</h3>
        </div>
        <div className="humidity-div">
          <h3>{weather.main.humidity}%</h3>
          <h3>Humidity</h3>
        </div>
      </div>
    </div>
  );
}
