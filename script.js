const apiKey = "0ff597efd5934f20df2a46397c2d12ad";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".errorMsg").style.display = "block";
    document.querySelector(".weatherResult").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}&degC`;
    document.querySelector(".highTemp").innerHTML = `<p>${Math.round(
      data.main.temp_max
    )}&degC</p><p>High</p>`;
    document.querySelector(".lowTemp").innerHTML = `<p>${Math.round(
      data.main.temp_min
    )}&degC</p><p>Low</p>`;
    document.querySelector(".humidity").innerHTML = `<p>${Math.round(
      data.main.humidity
    )}%</p><p>Air Humidity</p>`;
    document.querySelector(".wind").innerHTML = `<p>${Math.round(
      data.wind.speed
    )} km/h</p><p>Wind Speed</p>`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/cloudy.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "assets/thunderstorm.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/rainy.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/rainy.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/snow.png";
    } else if (data.weather[0].main == "Atmosphere") {
      weatherIcon.src = "assets/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/sun.png";
    }

    document.querySelector(".weatherResult").style.display = "block";
    document.querySelector(".errorMsg").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
