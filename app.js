//Traemos los elementos html al JS
const container = document.querySelector('.weather-container');
const search = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const weatherSide = document.querySelector('.weather-side');
const weatherInfo = document.querySelector('.weather-info');
const error = document.querySelector('.error-found'); // Crear

//
const roundNumber = (Number) => {
  return Math.round(Number);
};

//Funcion para buscar la data
const getCoorData = (cityData) => ({
  cityName: cityData.name,
  imageName: cityData.weather[0].icon,
  cityWeatherInfo: cityData.weather[0].description,
  cityTemp: roundNumber(cityData.main.temp),
  cityST: roundNumber(cityData.main.feels_like),
  cityMaxTemp: roundNumber(cityData.main.temp_max),
  cityMinTemp: roundNumber(cityData.main.temp_min),
  cityHumidity: cityData.main.humidity,
  cityWind: cityData.wind.speed,
});

//Template para el HTML

const createTemplateCity = (cityData) => {
  const {
    cityName,
    imageName,
    cityWeatherInfo,
    cityTemp,
    cityST,
    cityMaxTemp,
    cityMinTemp,
    cityHumidity,
    cityWind,
  } = getCoorData(cityData);

  return `<div class="weather-side">
        
          <div class="weather-side-info">
            <h2 class="date-dayname">${cityName}</h2>
          </div>
          <div class="weather-side-bottom">
            <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${imageName}.png" alt="weather image" />
            </div>
            <h2 class="weather-temp">${cityST}°C</h2>
            <h3 class="weather-desc">${cityWeatherInfo}</h3>
          </div>
        </div>
        <div class="weather-info">
          <div class="humidity">
            <i class="fa-solid fa-water"></i>
            <div class="text">
              <p>Humedad</p>
              <span>${cityHumidity}%</span>
            </div>
          </div>
          <div class="wind">
            <i class="fa-solid fa-wind"></i>
            <img src="" alt="" />
            <div class="text">
              <p>Viento</p>
              <span>${cityWind}Km/H</span>
            </div>
          </div>
        </div>`;
};

const renderCityCard = (cityData) => {
  return (container.innerHTML = createTemplateCity(cityData));
};

const searchCity = async (e) => {
  e.preventDefault();

  if (searchInput.value.trim() === '') {
    alert('Error');
    return;
  }
  const fetchCity = await requestCity(searchInput.value);
  if (!fetchCity.id) {
    alert('No encontrada');
    search.reset();
    return;
  }
  renderCityCard(fetchCity);
  search.reset();
  /*  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + search.value + "')"; */
};

const init = () => {
  search.addEventListener('submit', searchCity);
};

init();
