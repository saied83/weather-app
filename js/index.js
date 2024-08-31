import API_KEY from "./config.js";
const apiKey = API_KEY;
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const checkWeather = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await res.json();

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".city").innerHTML = data.name;
  const weatherIcon = document.querySelector(".weather-icon");
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "../assets/cloud.png";
      break;
    case "Clear":
      weatherIcon.src = "../assets/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "../assets/Rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "../assets/Drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "../assets/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "../assets/snow.png";
      break;
  }
  document.querySelector(".weather").style.display = "block";
};

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
