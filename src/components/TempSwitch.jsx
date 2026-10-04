import React from "react";

const TempSwitch = ({ unit, onToggle }) => {
  const isCelsius = unit === "metric";
  return (
    <div className="flex items-center justify-center mb-6">
      <div className=" bg-[#1b1b1b1a] shadow-card  border border-white/20 p-1 rounded-2xl flex items-center gap-1">
        <button
          type="button"
          onClick={onToggle}
          className={`px-4 py-1.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 ${isCelsius ? "bg-button text-secondary shadow-md scale-105" : "text-gray-700 hover:text-black"}`}
        >
          Celsius
        </button>
        <button
          type="button"
          onClick={onToggle}
          className={`px-4 py-1.5 rounded-xl cursor-pointer text-sm font-semibold transition-all duration-300 ${
            !isCelsius
              ? "bg-button text-secondary shadow-md scale-105"
              : "text-gray-700 hover:text-black"
          }`}
        >
          °F (Fahrenheit)
        </button>
      </div>
    </div>
  );
};

export default TempSwitch;
