import React from 'react';
import { Button, Dimensions, Text, View } from 'react-native';

import { WeatherApi } from '../../../typings/weatherApi';
import { BodyTextLarge, BodyTextRegular } from '../../../shared';
import {
  CityAndStatusDetails,
  TemperatureTag,
  WeatherCardContentWrapper,
  WeatherCardTouchable,
} from './WeatherCard.style';

type Props = {
  weatherApiData: WeatherApi;
};

/**
 * Generic component that renders the weather card along with the details
 * in the Home Screen
 * @param weatherApiData {@see WeatherApi}
 */
const WeatherCard: React.FC<Props> = ({ weatherApiData }) => {
  const { town, status, temperature } = weatherApiData;
  const { height, width } = Dimensions.get('window');
  return (
    <WeatherCardTouchable width={width} height={height / 8}>
      <WeatherCardContentWrapper>
        <CityAndStatusDetails>
          <BodyTextLarge bold>{town}</BodyTextLarge>
          <BodyTextRegular>{status}</BodyTextRegular>
        </CityAndStatusDetails>
        <TemperatureTag>
          <BodyTextLarge bold>{temperature}</BodyTextLarge>
        </TemperatureTag>
      </WeatherCardContentWrapper>
    </WeatherCardTouchable>
  );
};

export default WeatherCard;
