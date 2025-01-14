import { weatherHomeInfo } from '../constants/weather-info';
import WeatherBoxView from '../views/weather-box';

class Home {
  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    const weatherBoxView = new WeatherBoxView({
      container: this.container,
      weatherData: weatherHomeInfo,
      page: 'homePage',
    });

    this.container.innerHTML = `
      <div id="container">
        <h1 id="title-box">${weatherHomeInfo.title}</h1>
        ${weatherBoxView.render()}
      </div>
    `;
  }
}

export default Home;
