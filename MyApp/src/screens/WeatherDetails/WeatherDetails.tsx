import React, { Fragment } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { FlatList, ListRenderItem } from 'react-native';
import WeatherCard from '../Home/components/WeatherCard';
import { RootStackParamList } from '../../typings/navigation';
import { WeatherDetailsType } from '../../typings/weatherApi';
import { Divider } from '../../shared';
import { SpecificDetails } from './components';

type WeatherDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

/**
 * Component that renders the weather details stack screen
 */
const WeatherDetails: React.FC = () => {
  const { params } = useRoute<WeatherDetailsScreenRouteProp>();
  const renderItem: ListRenderItem<WeatherDetailsType> = ({ item }) => (
    <SpecificDetails title={item.title} value={item.value} />
  );

  const data = Array.of(
    {
      title: 'Humidity',
      value: `${params.weatherApiData.main.humidity}%`,
    },
    {
      title: 'Pressure',
      value: `${params.weatherApiData.main.pressure} hPa`,
    },
    {
      title: 'Wind Speed',
      value: `${params.weatherApiData.wind.speed} mPh`,
    },
    {
      title: 'Cloud Cover',
      value: `${params.weatherApiData.clouds.all} %`,
    },
  );
  return (
    <Fragment>
      <WeatherCard weatherApiData={params.weatherApiData} disabled />
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.title + index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Fragment>
  );
};

export default WeatherDetails;
