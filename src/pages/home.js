import { API_KEY, getWeatherInfo, WEATHER_BASE_URL } from '../api/weather';
import WeatherBoxSkeleton from '../skeleton/weather-box';

import WeatherBoxView from '../views/weather-box';

class Home {
  constructor(container) {
    this.container = container;
    this.weatherUrl = this.getWeatherUrl('Seoul');
    this.weatherInfo = null;
    this.weatherBoxSkeleton = new WeatherBoxSkeleton();
    this.render();
    this.init();
  }

  getWeatherUrl(city, key = API_KEY) {
    return `${WEATHER_BASE_URL}/weather?q=${city}&appid=${key}&units=metric&lang=kr`;
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
    });

    this.container.innerHTML = `
      <div id="container">
        <h1 id="title-box">홈 페이지</h1>
      ${!weatherInfo ? this.weatherBoxSkeleton.render() : weatherBoxView.renderHomePage(weatherInfo)}

      </div>
    `;
  }
}

export default Home;
