import { weatherHomeData } from '../constants/weather-data';
import getWeatherBoxView from '../views/weather-box';

function Home(container) {
  this.container = container;

  this.render = () => {
    this.container.innerHTML = getWeatherBoxView({
      weatherData: weatherHomeData,
      page: 'homePage'
    });
  };

  this.render();
}

export default Home;
