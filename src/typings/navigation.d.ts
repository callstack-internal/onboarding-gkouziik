import { WeatherData } from './weatherApi';

export type RootStackParamList = {
  Details: { weatherApiData: WeatherData };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
