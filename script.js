const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "330a2482a5msh2435789d0e4dd67p10957fjsnfb279bdd3970",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        return date.toLocaleTimeString();
      };
      feels_like.innerHTML = response.feels_like+ '°C';
      humidity.innerHTML = response.humidity+'%';
      temp.innerHTML = response.temp+'°C';
      max_temp.innerHTML = response.max_temp+'°C ↑';
      min_temp.innerHTML = response.min_temp+'°C ↓';
      sunrise.innerHTML = formatTime(response.sunrise);
      sunset.innerHTML = formatTime(response.sunset);
      wind_speed.innerHTML = response.wind_speed+ ' m/s';
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
