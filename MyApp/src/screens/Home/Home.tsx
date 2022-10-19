import React from 'react';

import { weatherApiMocks } from '../../../__mocks__/weatherAPIMocks';
import { Divider } from '../../shared';
import { HomeContainer } from './Home.style';
import WeatherCard from './components/WeatherCard';

/**
 * Component that renders the Landing Screen of the weather application
 */
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <WeatherCard weatherApiData={weatherApiMocks[0]} />
      <Divider />
    </HomeContainer>
  );
};

export default Home;
