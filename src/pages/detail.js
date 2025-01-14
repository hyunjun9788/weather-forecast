import { weatherDetailInfo } from '../constants/weather-data';
import getWeatherBoxView from '../views/weather-box';

class Detail {
  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = getWeatherBoxView({
      weatherData: weatherDetailInfo,
      page: 'detailPage',
    });
  }
}

export default Detail;
