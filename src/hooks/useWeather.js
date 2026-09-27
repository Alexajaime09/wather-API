import { useState, useEffect, useCallback } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherApi";

export const useWeather = (defaultCity = "Mexico") => {
  const [city, setCity] = useState(defaultCity);
  const [unit, setUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = useCallback(async (searchCity, currentUnit) => {
    setLoading(true);
    setError(null);
    try {
      const current = await getCurrentWeather(setCity, currentUnit);

      setWeatherData(current);

      const forecast = await getForecast(
        current.coord.lat,
        current.coord.lon,
        currentUnit,
      );

      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (city) {
      getWeatherData(city, unit);
    }
  }, [city, unit, getWeatherData]);

  const switchUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const searchCity = (newCity) => {
    if (newCity.trim() !== "") {
      setCity(newCity);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    unit,
    switchUnit,
    searchCity,
  };
};
