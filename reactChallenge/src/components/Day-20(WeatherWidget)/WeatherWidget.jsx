import { useState } from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = "a588e74b18360bd7b2d9e18a0cd9a986";

  async function getData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  }
  if (error) {
    return <p>{error}</p>;
  }

  const getWeatherIcon = (weather) => {
    if (!weather) return null;
    const main = weather.weather[0].main;
    switch (main) {
      case "Clear":
        return <WiDaySunny size={50} className="text-yellow-400" />;
      case "Clouds":
        return <WiCloud size={50} className="text-gray-400" />;
      case "Rain":
        return <WiRain size={50} className="text-blue-400" />;
      case "Snow":
        return <WiSnow size={50} className="text-white" />;
      default:
        return <WiCloud size={50} className="text-gray-400" />;
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-xl text-center">
      <h2 className="text-lg font-bold mb-2">Weather Widget</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          type="submit"
          disabled={loading}
          onClick={getData}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Weather
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {weather && weather.main && (
        <>
          {/* <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-16 h-16 mb-4"
          /> */}
          {getWeatherIcon(weather)}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{weather.name}</h3>
            <p className="text-2xl font-bold">{weather.main.temp}°C</p>
          </div>
        </>
      )}
      {weather.message === "city not found" && (
        <p>city not invalid pleaes try again later</p>
      )}
    </div>
  );
};

export default WeatherWidget;
