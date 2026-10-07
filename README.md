# Weather App

it's a weather forescasting app built with React. The API to create this project is OpenWeatherMap API to fetch current weather and 5-day forecast for any city



## Link of website
https://splendorous-stardust-3173d4.netlify.app

## Features

-Search weather by city name
-View information of the weather as: temperature, humidity, wind speed
-Select Celsius or Fahrenheit throught a toggle
-Responsive design
-If a city dosen't exist show a messsage

##Tech Stack

- **React** + **Vite**
- **Tailwind**
- **Netlify Functions** (to safely handle the API key)
- **OpenWeatherMap API**

## Project Structure
```text
weather/
├── netlify/
│   └── functions/       # Serverless function for weather API
├── src/
│   ├── components/      # UI Components (Search, WeatherDisplay, Forecast)
│   ├── App.jsx          # Main state & logic
│   └── index.css        # Styles
├── netlify.toml         # Local & deployment config
└── package.json




How to run Locally

Clone the repo and install dependencies
Add your API key in a .env file at the root
Start the server => npm run netlify:dev
Open http://localhost:8888 in your browser.
