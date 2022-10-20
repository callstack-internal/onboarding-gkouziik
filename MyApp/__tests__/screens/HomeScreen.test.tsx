import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

import { MainNavigator } from '../../src/navigators';
import { WeatherApiT } from '../../src/typings/weatherApi';
import * as useWeather from '../../src/hooks/getAllWeatherData';

const MockData: WeatherApiT = {
  cnt: 1,
  list: [
    {
      coord: {
        lon: -74.006,
        lat: 40.7143,
      },
      sys: {
        country: 'US',
        timezone: -14400,
        sunrise: 1666177880,
        sunset: 1666217417,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 8.66,
        feels_like: 5.48,
        temp_min: 6.53,
        temp_max: 10.71,
        pressure: 1011,
        humidity: 60,
      },
      visibility: 10000,
      wind: {
        speed: 6.17,
        deg: 230,
      },
      clouds: {
        all: 0,
      },
      dt: 1666189071,
      id: 5128581,
      name: 'New York',
    },
  ],
};

jest.spyOn(useWeather, 'useGetAllWeatherData').mockImplementation(() => ({
  data: { ...MockData },
  isLoading: false,
  isRefetching: false,
  error: null,
}));

describe('Home Screen', () => {
  let queries: RenderAPI;

  beforeEach(async () => {
    queries = render(<MainNavigator />);
  });
  describe('On Successful Request', () => {
    it('Should render the Data', async () => {
      expect(queries.getByText('New York')).toBeTruthy();
    });
    describe('On pressing Card Button', () => {
      let listButton: ReactTestInstance;
      beforeEach(async () => {
        listButton = queries.getByTestId('cardButtonID');
        fireEvent.press(listButton);
      });
      it('Should navigate to Details Screen', async () => {
        expect(queries.getByText('Humidity')).toBeTruthy();
      });
    });
  });
});
