import axios from 'axios';

const WEATHER_API_KEY = '414ddeb90739ab8c47d75fe1056fb77b';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
