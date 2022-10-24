import styled from 'styled-components/native';

type WeatherCardProps = {
  width: number;
  height: number;
};

export const WeatherCardTouchable = styled.TouchableOpacity<WeatherCardProps>`
  width: ${(props: WeatherCardProps) => `${props.width}px`};
  height: ${(props: WeatherCardProps) => `${props.height}px`};
`;

export const WeatherCardContentWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 7px;
  padding-left: 7px;
`;

export const CityAndStatusDetails = styled.View`
  flex: 0.5;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const TemperatureTag = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: flex-end;
`;
