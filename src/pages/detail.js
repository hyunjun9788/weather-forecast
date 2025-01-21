import { getWeatherInfo, getWeatherUrl } from '../api/weather';
import WeatherBoxSkeleton from '../skeleton/weather-box';
import WeatherBoxView from '../views/weather-box';

class Detail {
  constructor(container) {
    this.container = container;
    this.weatherUrl = getWeatherUrl('Seoul');
    this.weatherInfo = null;
    this.weatherBoxSkeleton = new WeatherBoxSkeleton();
    this.render();
    this.init();
  }

  getHomeButton() {
    return `<a href="/" id="home-btn">홈으로</a>`;
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
        <h1 id="title-box">Seoul</h1>
        <a href="/" id="home-btn">홈으로</a>
        ${!weatherInfo ? this.weatherBoxSkeleton.render() : weatherBoxView.renderDetailPage(weatherInfo)}
      </div>
    `;
  }
}

export default Detail;
