import React from "react";

const WeatherCard = ({ data, unit }) => {
  if (!data || !data.list) return null;

  const forecasts = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  const tempUnit = unit === "metric" ? "°C" : "°F";
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecasts.map((day) => {
          const date = new Date(day.dt * 1000);
          const dayName = day.toLocalDateString("en-US", { weekday: "short" });
          const dateFormat = date.toLocaleDateString("en-UD", {
            month: "short",
            day: "numeric",
          });
          const weatherDetails = item.weather[0];
          const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`;

          return (
            <div
              key={day.dt}
              className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg hover:scale-105 transition-all duration-300  "
            >
              <div className="text-content">
                <p className="font-bold text-gray-800 text-base">{dayName}</p>
                <p className="text-xs text-gray-500">{dateFormat}</p>
              </div>
              <img
                src={iconUrl}
                alt="watherInfo"
                className="w-16 h-16 drop-shadow-sm my-1"
              />

              <p className="text-xs text-gray-600 capitalize text-center mb-2 line-clamp-1">
                {weatherDetails.description}
              </p>
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {Math.round(date.main.temp)}
                  {tempUnit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherCard;
