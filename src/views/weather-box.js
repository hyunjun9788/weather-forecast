import { ICON_BASE_URL } from '../api/weather';
import WeatherBoxSkeleton from '../skeleton/weather-box';
import { formatDate } from '../utils/format-date';

class WeatherBoxView {
  constructor({ container, weatherInfo }) {
    this.container = container;
    this.weatherInfo = weatherInfo;
    this.weatherBoxSkeleton = new WeatherBoxSkeleton();
  }

  renderHomePage() {
    if (!this.weatherInfo) {
      return this.weatherBoxSkeleton.render();
    } else {
      return `
        <a href="/detail" id="weather-box">
          <h3 id="region-box">${this.weatherInfo.name}</h3>
          <div>${formatDate(this.weatherInfo.dt)}</div>
          <div id="weather-info-box">
            <img src="${ICON_BASE_URL + this.weatherInfo.weather[0].icon}.png" />
            <div id="weather-detail-box">
              <p>현재</p>
              <p>${this.weatherInfo.main.temp}°C</p>
              <p>최저/최고</p>
              <p>${this.weatherInfo.main.temp_min}°C / ${this.weatherInfo.main.temp_max}°C</p>
            </div>
          </div>
          <p>${this.weatherInfo.weather[0].description}</p>
        </a>
        `;
    }
  }

  renderDetailPage() {
    if (!this.weatherInfo) {
      return this.weatherBoxSkeleton.render();
    }

    return this.weatherInfo.list.slice(0, 5).map((weatherItem) => {
      return `
        <div id="weather-box" >
          <h3 id="region-box">${this.weatherInfo.city.name}</h3>
          <div>${formatDate(weatherItem.dt)}</div>
          <div id="weather-info-box">
            <img src="${ICON_BASE_URL + weatherItem.weather[0].icon}.png" />
            <div id="weather-detail-box">
              <p>현재</p>
              <p>${weatherItem.main.temp}°C</p>
              <p>최저/최고</p>
              <p>${weatherItem.main.temp_min}°C / ${weatherItem.main.temp_max}°C</p>
            </div>
          </div>
          <p>${weatherItem.weather[0].description}</p>
        </div>
        `;
    });
  }
}

export default WeatherBoxView;
