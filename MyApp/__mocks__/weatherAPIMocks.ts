import { WeatherApi } from '../src/typings/weatherApi';

export const weatherApiMocks: WeatherApi[] = [
  {
    town: 'Athens',
    status: 'Clear',
    temperature: '30.2C',
    humidity: '87%',
    pressure: '1000 Pa',
    windSpeed: '3 mPh',
    cloudCover: '20%',
  },
  {
    town: 'New York',
    status: 'Cloudy',
    temperature: '15.5C',
    humidity: '87%',
    pressure: '1000 Pa',
    windSpeed: '3 mPh',
    cloudCover: '20%',
  },
];
