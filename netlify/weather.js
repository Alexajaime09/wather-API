export async function handler(event) {
  const params = event.queryStringParameters || {};
  const { city, lat, lon, units = "metric", type } = params;

  const API_KEY = process.env.OPENWEATHER_API_KEY || process.env.API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5";

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          "API Key not configured. Set OPENWEATHER_API_KEY in Netlify environment variables or in your local .env file.",
      }),
    };
  }

  let url = "";

  if (type === "forecast" || (lat && lon)) {
    if (!lat || !lon) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Latitude and Longitude are required for forecast",
        }),
      };
    }
    url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}&lang=en`;
  } else if (city && city.trim() !== "" && city !== "undefined") {
    url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}&lang=en`;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid search parameters" }),
    };
  }

  console.log("➡️ URL generada por Netlify Function:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.cod === "404" || data.message) {
      return {
        statusCode: data?.cod === 404 || data?.cod === "404" ? 404 : 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: data?.message || "City not found",
          cod: data?.cod || 400,
        }),
      };
    }

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
