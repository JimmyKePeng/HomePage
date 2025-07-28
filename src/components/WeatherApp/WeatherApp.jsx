import { useEffect, useState } from "react";
import Location from "./Location";
import "./style.css";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function WeatherApp() {
  const [city, setCity] = useState("oakland");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    getData();
  }

  async function getData() {
    setLoading(true);
    try {
      const response_location = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
      );
      const result_location = await response_location.json();
      if (result_location && result_location[0]) {
        const location = {
          lat: result_location[0].lat,
          lon: result_location[0].lon,
          country: result_location[0].country,
        };

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
        );
        const result = await response.json();
        setWeather(result);
        setLoading(false);
        setErr(null);
        // console.log(result);
      }
    } catch (err) {
      setLoading(false);
      setErr(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="weather-app-div">
      <form className="weather-input-div">
        <input
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
          placeholder="Enter City Name"
        />
        <button onClick={handleClick} className="weather-btn">
          Search
        </button>
      </form>
      {loading ? <h1>Loading, Please wait</h1> : null}
      {err && <h2>{err.message || "Something went wrong."}</h2>}
      {weather ? <Location weather={weather} /> : null}
    </div>
  );
}
