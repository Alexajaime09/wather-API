const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city, units = "metrics") => {
  if (!API_KEY) {
    throw new Error("environment variables not available");
  }
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}&lang=en`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new error("City not found");
    }
    throw new Error("Error to try to get data");
  }
  return await response.json();
};

export const getForecast = async (latitud, longitud, units = "metrics") => {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${latitud}&lon=${longitud}&units=${units}&appid=${API_KEY}&lang=en`,
  );

  if (!response.ok) {
    throw new Error("failed to get forecast data ");
  }
  return await response.json();
};
