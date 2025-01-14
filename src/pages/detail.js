import { weatherDetailInfo } from '../constants/weather-info';
import WeatherBoxView from '../views/weather-box';

class Detail {
  constructor(container) {
    this.container = container;
    this.render();
  }

  getHomeButton() {
    return `<a href="/" id="home-btn">홈으로</a>`;
  }

  render() {
    const weatherBoxView = new WeatherBoxView({
      container: this.container,
      weatherData: weatherDetailInfo,
      page: 'detailPage',
    });

    this.container.innerHTML = `
      <div id="container">
        <h1 id="title-box">${weatherDetailInfo.title}</h1>
        ${this.getHomeButton()}
        ${weatherBoxView.render()}
      </div>
    `;
  }
}

export default Detail;
