import { weatherDetailData } from '../constants/weather-data';
import getWeatherBoxView from '../views/weather-box';

function Detail(container) {
  this.container = container;

  this.render = () => {
    this.container.innerHTML = getWeatherBoxView({
      weatherData: weatherDetailData,
      page: 'detailPage'
    });
  };

  this.render();
}

export default Detail;
