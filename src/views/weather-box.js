import { ICON_BASE_URL } from '../api/weather';
import { formatDate } from '../utils/format-date';

class WeatherBoxView {
  constructor({ container }) {
    this.container = container;
  }

  renderHomePage(weatherInfo) {
    const { name, dt, weather, main } = weatherInfo;
    return `
        <a href="/detail" id="weather-box">
          <h3 id="region-box">${name}</h3>
          <div>${formatDate(dt)}</div>
          <div id="weather-info-box">
            <img src="${ICON_BASE_URL + weather[0].icon}.png" />
            <div id="weather-detail-box">
              <p>현재</p>
              <p>${main.temp}°C</p>
              <p>최저/최고</p>
              <p>${main.temp_min}°C / ${main.temp_max}°C</p>
            </div>
          </div>
          <p>${weather[0].description}</p>
        </a>
        `;
  }

  renderDetailPage(weatherInfo) {
    const { list, city } = weatherInfo;
    return list.slice(0, 5).map((weatherItem) => {
      const { dt, weather, main } = weatherItem;
      return `
        <div id="weather-box" >
          <h3 id="region-box">${city.name}</h3>
          <div>${formatDate(dt)}</div>
          <div id="weather-info-box">
            <img src="${ICON_BASE_URL + weather[0].icon}.png" />
            <div id="weather-detail-box">
              <p>현재</p>
              <p>${main.temp}°C</p>
              <p>최저/최고</p>
              <p>${main.temp_min}°C / ${main.temp_max}°C</p>
            </div>
          </div>
          <p>${weather[0].description}</p>
        </div>
        `;
    });
  }
}

export default WeatherBoxView;
