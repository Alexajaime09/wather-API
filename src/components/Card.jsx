import React from "react";

const Card = ({ data, unit }) => {
  if (!data) return null;
  console.log("i'am data from card", data);

  const { name, main, weather, wind, sys } = data;
  const weatherDetails = weather[0];

  const tempUnit = unit === "metric" ? "°C" : "°F";
  const speedUnit = unit === "metric" ? "m/s" : "mph";

  const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails.icon}@4x.png`;

  return (
    <div className="w-full max-w-md mx-auto bg-[#1b1b1b1a] backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-card text-gray-800 transition-all duration-300 hover:shadow-2xl mb-8">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold tracking-wide">
          {name}, {sys.country}
        </h2>
        <p className="text-sm text-text-secondary capitalize mt-1 font-medium">
          {weatherDetails.description}
        </p>
      </div>

      <div className="flex items-center justify-between text-text-secondary my-4 px-4">
        <div className="flex items-center">
          <img
            src={iconUrl}
            alt={weatherDetails.description}
            className="w-24 h-24 drop-shadow-md animate-pulse"
          />
        </div>
        <div className="text-right">
          <span className="text-6xl font-extrabold tracking-tight">
            {Math.round(main.temp)}
          </span>
          <span className="text-3xl font-semibold  ml-1">{tempUnit}</span>
          <p className="text-xs  mt-1">
            Feels like: {Math.round(main.feels_like)}
            {tempUnit}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20 text-sm">
        <div className="flex items-center justify-between bg-button-bg text-text-details  p-3 rounded-2xl shadow-sm">
          <span className=" font-medium">Humidity</span>
          <span className="font-bold ">{main.humidity}%</span>
        </div>
        <div className="flex items-center justify-between bg-button-bg text-text-details   p-3 rounded-2xl shadow-sm">
          <span className=" font-medium">Wind</span>
          <span className="font-bold ">
            {wind.speed} {speedUnit}
          </span>
        </div>
        <div className="flex items-center justify-between bg-button-bg text-text-details   p-3 rounded-2xl shadow-sm">
          <span className=" font-medium">Min Temp</span>
          <span className="font-bold ">
            {Math.round(main.temp_min)}
            {tempUnit}
          </span>
        </div>
        <div className="flex items-center justify-between bg-button-bg text-text-details  p-3 rounded-2xl shadow-sm">
          <span className="text-text-details font-medium">Max Temp</span>
          <span className="font-bold ">
            {Math.round(main.temp_max)}
            {tempUnit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
