import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { weatherApiMocks } from '../../../__mocks__/weatherAPIMocks';
import { Divider } from '../../shared';
import { WeatherApi } from '../../typings/weatherApi';
import { HomeContainer } from './Home.style';
import WeatherCard from './components/WeatherCard';

/**
 * Component that renders the Landing Screen of the weather application
 */
const Home: React.FC = () => {
  const renderItem: ListRenderItem<WeatherApi> = React.useCallback(
    ({ item }) => (
      <>
        <WeatherCard weatherApiData={item} />
        <Divider />
      </>
    ),
    [weatherApiMocks], // currently, are just Mocks
  );

  return (
    <HomeContainer>
      <FlatList
        data={weatherApiMocks}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
};

export default Home;
