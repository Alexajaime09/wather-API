import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const key = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getData = async () => {
    let obj;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=19.4326&lon=-99.1332&appid=${key}&units=metric&lang=es`,
    );

    if (!response.ok) return;
    obj = await response.json();
    setData(obj);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="  text-7xl">Hola</h1>
      <SearchBar />

      {data && <Card data={data} />}
    </>
  );
}

export default App;
