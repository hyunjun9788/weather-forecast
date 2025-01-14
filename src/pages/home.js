import { weatherHomeInfo } from '../constants/weather-data';
import getWeatherBoxView from '../views/weather-box';

class Home {
  constructor(container) {
    this.container = container;
    this.render();
  }
  render = () => {
    this.container.innerHTML = getWeatherBoxView({
      weatherData: weatherHomeInfo,
      page: 'homePage',
    });
  };
}

export default Home;
