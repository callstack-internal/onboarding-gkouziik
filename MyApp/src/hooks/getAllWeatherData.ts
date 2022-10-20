import { useQuery } from '@tanstack/react-query';

import { APP_ID, CITIES_LIST, GET_WEATHER_DATA_URL } from '../shared/constants';
import { WeatherApiT } from '../typings/weatherApi';

export const QUERY_PARAMS = new URLSearchParams({
  appid: APP_ID,
  id: CITIES_LIST.join(','),
  units: 'metric',
});

const getAllWeatherData = async () => {
  const response = await fetch(`${GET_WEATHER_DATA_URL}?${QUERY_PARAMS}`);
  const data = await response.json();
  return data;
};

export const useGetAllWeatherData = () => {
  return useQuery<WeatherApiT | undefined, Error>(
    ['allWeatherData'],
    getAllWeatherData,
  );
};
