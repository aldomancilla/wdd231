const theTown = document.querySelector("#town");
const theDescription = document.querySelector("#description");
const theTemperature = document.querySelector("#temperature");
const theGraphic = document.querySelector("#graphic");
const theForecast = document.querySelector("#forecast");

const myKey = "a003ddb75c84f0d1ebb71244c316516a";
const myLat = 14.544868984650781;
const myLon = -90.40938373546761;

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw Error(await response.text());

    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error("Weather error:", error);
  }
}

function displayResults(weatherData) {
  theTown.textContent = weatherData.name;
  theDescription.textContent = weatherData.weather[0].description;
  theTemperature.textContent = `Temperature: ${weatherData.main.temp.toFixed(0)} °C`;

  const icoLink = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  theGraphic.setAttribute("src", icoLink);
  theGraphic.setAttribute("alt", weatherData.weather[0].description);
}

async function apiFetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (!response.ok) throw Error(await response.text());

    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error("Forecast error:", error);
  }
}

function displayForecast(forecastData) {
  theForecast.innerHTML = "";

  const dailyForecast = forecastData.list.filter(
    (item, index) => index % 8 === 0,
  );

  dailyForecast.slice(1, 4).forEach((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });

    const temp = day.main.temp.toFixed(0);
    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
    const desc = day.weather[0].description;

    theForecast.innerHTML += `
      <div class="forecast-day">
        <h4>${date}</h4>
        <img src="${icon}" alt="${desc}">
        <p>${temp} °C</p>
      </div>
    `;
  });
}

apiFetch();
apiFetchForecast();
