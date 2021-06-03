// Weather API
function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.sys.country;
  console.log(response.data.sys.country);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windSpeedElement = document.querySelector("#wind");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "a0a0d90971165d38ca9ee74546a17771";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
