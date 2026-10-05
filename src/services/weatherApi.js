export const getCurrentWeather = async (city, units = "metric") => {
  const response = await fetch(
    `/.netlify/functions/weather?city=${encodeURIComponent(city)}&units=${units}&type=current`,
  );

  if (!response.ok) {
    if (response.status === 404) throw new Error("City not found");
    throw new Error("Error trying to get data");
  }

  return await response.json();
};

export const getForecast = async (lat, lon, units = "metric") => {
  const response = await fetch(
    `/.netlify/functions/weather?lat=${lat}&lon=${lon}&units=${units}&type=forecast`,
  );

  if (!response.ok) throw new Error("Failed to get forecast data");

  return await response.json();
};
