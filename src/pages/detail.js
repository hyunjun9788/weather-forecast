import { weatherDetailData } from '../constants/weather-data';
import getWeatherBoxView from '../views/weather-box';

class Detail {
  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = getWeatherBoxView({
      weatherData: weatherDetailData,
      page: 'detailPage',
    });
  }
}

export default Detail;
