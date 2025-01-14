export const API_KEY = 'a4334b3bbb291a1830d2f3ae1504f7ea';
export const CURRENT_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
export const THREE_HOURS_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
export const ICON_BASE_URL = 'http://openweathermap.org/img/wn/';

export async function getWeatherInfo(url) {
  return await fetch(url).then((response) => response.json());
}
