import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TempSwitch from "./components/TempSwitch";
import WeatherCard from "./components/WeatherCard";
import Card from "./components/Card";
import { useWeather } from "./hooks/useWeather";

function App() {
  const {
    weatherData,
    forecastData,
    loading,
    error,
    unit,
    switchUnit,
    searchCity,
  } = useWeather("Mexico");

  console.log("soy forescastData", forecastData);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#22243f] via-[#717392] to-[#22243f] py-10 px-4 sm:px-6 lg:px-8  transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight drop-shadow-sm ">
            Weather Forecast
          </h1>
          <p className="text-[#dedede] mt-2 font-medium">
            check the time of your city or any other
          </p>
        </header>
        <main>
          <section aria-label="Weather controls">
            <SearchBar onSearch={searchCity} />
            <TempSwitch unit={unit} onToggle={switchUnit} />
          </section>
          {loading && (
            <div className="flex flex-col items-center justify-center my-12 py-8 ">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent ">
                <p className="text-gray-700 font-semibold mt-4 animate-pulse">
                  Get weather data
                </p>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="w-full max-w-md mx-auto bg-red-100/80 backdrop-blur-md border border-red-300 text-red-700 px-6 py-4 rounded-2xl shadow-lg my-6 text-center animate-bounce ">
              <p className="font-bold">Error</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}

          {!loading && !error && weatherData && (
            <section aria-label="Weather info">
              <Card data={weatherData} unit={unit} />
              <WeatherCard data={forecastData} unit={unit} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
export default App;
