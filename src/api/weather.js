export const API_KEY = 'a4334b3bbb291a1830d2f3ae1504f7ea';
export const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
export const ICON_BASE_URL = 'http://openweathermap.org/img/wn/';

export async function getWeatherInfo(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('네트워크 응답이 OK가 아닙니다');
  }
  return response.json();
}

export const getWeatherUrl = (city, key = API_KEY) => {
  return `${WEATHER_BASE_URL}/forecast?q=${city}&appid=${key}&units=metric&lang=kr`;
};
