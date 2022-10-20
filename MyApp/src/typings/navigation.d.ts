import { WeatherApi } from './weatherApi';

export type RootStackParamList = {
  Details: { weatherApiData: WeatherApi };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
