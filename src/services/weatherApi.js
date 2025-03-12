const API_KEY = "c074857eaef4ebdb44cff8a6fb3c4eaa"; // Replace with your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  try {
    //Fetch data from the end point
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    //Show error in case when no data is fetched
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default getWeather;
