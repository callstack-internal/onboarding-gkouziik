import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { WeatherData } from '../../../typings/weatherApi';
import { BodyTextLarge, BodyTextRegular } from '../../../shared';
import {
  CityAndStatusDetails,
  TemperatureTag,
  WeatherCardContentWrapper,
  WeatherCardTouchable,
} from './WeatherCard.style';

type Props = {
  weatherApiData: WeatherData;
  disabled?: Boolean;
};

/**
 * Generic component that renders the weather card along with the details
 * in the Home Screen
 * @param weatherApiData {@see WeatherApi}
 * @param disabled
 */
const WeatherCard: React.FC<Props> = ({ weatherApiData, disabled = false }) => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get('window');

  return (
    <WeatherCardTouchable
      testID={'cardButtonID'}
      width={width}
      height={height / 8}
      disabled={disabled}
      onPress={() => {
        navigation.navigate(
          'Details' as never,
          {
            weatherApiData: weatherApiData,
          } as never,
        );
      }}
    >
      <WeatherCardContentWrapper>
        <CityAndStatusDetails>
          <BodyTextLarge bold>{weatherApiData.name}</BodyTextLarge>
          <BodyTextRegular>{weatherApiData.weather[0].main}</BodyTextRegular>
        </CityAndStatusDetails>
        <TemperatureTag>
          <BodyTextLarge bold>{`${weatherApiData.main.temp}F`}</BodyTextLarge>
        </TemperatureTag>
      </WeatherCardContentWrapper>
    </WeatherCardTouchable>
  );
};

export default WeatherCard;
