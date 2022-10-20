import React, { Fragment } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import WeatherCard from '../Home/components/WeatherCard';
import { RootStackParamList } from '../../typings/navigation';
import { SpecificDetails } from './components';

type WeatherDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

/**
 * Component that renders the weather details stack screen
 */
const WeatherDetails: React.FC = () => {
  const { params } = useRoute<WeatherDetailsScreenRouteProp>();
  const { town, status, temperature, ...restApiData } = params.weatherApiData;
  return (
    <Fragment>
      <WeatherCard weatherApiData={params.weatherApiData} disabled />
      {Object.entries(restApiData).map(([key, value], index) => (
        <SpecificDetails key={`${index}_${key}`} title={key} value={value} />
      ))}
    </Fragment>
  );
};

export default WeatherDetails;
