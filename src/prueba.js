const key = meta.env.VITE_OPENWEATHER_API_KEY;

const getData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/4.0/onecall/current?lat=19.4326&lon=-99.1332&appid=${key}`,
  );
  let data;
  if (!response.ok) return;
  data = response.json();
  console.log(data);
};
