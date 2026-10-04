import React from "react";

const WeatherCard = ({ data, unit }) => {
  if (!data || !data.list) return null;

  const forecasts = data.list
    .reduce((acc, item) => {
      const dateStr = item.dt_txt.split(" ")[0];
      if (!acc.some((d) => d.dt_txt.startsWith(dateStr))) {
        const noonItem = data.list.find(
          (i) => i.dt_txt.startsWith(dateStr) && i.dt_txt.includes("12:00:00"),
        );
        acc.push(noonItem || item);
      }
      return acc;
    }, [])
    .slice(0, 5);

  const tempUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
      <h3 className="text-xl font-medium text-gray-800 mb-4 text-center sm:text-left">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecasts.map((day) => {
          const date = new Date(day.dt * 1000);

          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          const dateFormat = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          const weatherDetails = day.weather[0];
          const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`;

          return (
            <div
              key={day.dt}
              className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-content text-center">
                <p className="font-bold text-secondary ">{dayName}</p>
                <p className="text-xs text-white">{dateFormat}</p>
              </div>

              <img
                src={iconUrl}
                alt={weatherDetails.description}
                className="w-16 h-16 drop-shadow-sm my-1"
              />

              <p className="text-xs text-secondary capitalize text-center mb-2 line-clamp-1">
                {weatherDetails.description}
              </p>

              <div className="text-center border-t border-white/20 w-full pt-2">
                <span className="text-lg font-bold text-gray-800">
                  {Math.round(day.main.temp)}
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
