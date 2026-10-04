import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      onSearch(textInput);
      setTextInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Search your city"
          className="w-full px-4 py-3 pl-10 text-gray-800 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus-ring-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400  "
        />
        <svg
          className="w-5 h-5 absolute left-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-2 px-4 py-1.5 bg-color-button text-text-seconday font-medium rounded-xl hover:bg-[#7a7588] active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
