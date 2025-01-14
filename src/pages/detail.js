import { API_KEY, getWeatherInfo, THREE_HOURS_WEATHER_BASE_URL } from '../api/weather';
import WeatherBoxView from '../views/weather-box';

class Detail {
  constructor(container) {
    this.container = container;
    this.weatherUrl = this.getWeatherUrl('Seoul');
    this.weatherInfo = null;
    this.render();
    this.init();
  }

  getHomeButton() {
    return `<a href="/" id="home-btn">홈으로</a>`;
  }

  getWeatherUrl(city, key = API_KEY) {
    return `${THREE_HOURS_WEATHER_BASE_URL}?q=${city}&appid=${key}&units=metric&lang=kr`;
  }

  async init() {
    try {
      this.weatherInfo = await getWeatherInfo(this.weatherUrl);
      this.render(this.weatherInfo);
    } catch (error) {
      this.container.innerHTML = `<p>데이터를 가져오는 중 오류가 발생했습니다.</p>`;
    }
  }

  render(weatherInfo) {
    const weatherBoxView = new WeatherBoxView({
      container: this.container,
      weatherInfo,
    });

    this.container.innerHTML = `
      <div id="container">
        <h1 id="title-box">Seoul</h1>
        ${this.getHomeButton()}
        ${weatherBoxView.renderDetailPage()}
      </div>
    `;
  }
}

export default Detail;
