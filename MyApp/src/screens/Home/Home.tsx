import React from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';

import { Divider, StyledActivityIndicator } from '../../shared';
import { WeatherData } from '../../typings/weatherApi';
import { useGetAllWeatherData } from '../../hooks/getAllWeatherData';
import NotificationInterface from '../../shared/notifications';
import { CustomButton, HomeContainer } from './Home.style';
import WeatherCard from './components/WeatherCard';

/**
 * Component that renders the Landing Screen of the weather application
 */
const Home: React.FC = () => {
  const { data, isRefetching, error, refetch, isLoading } =
    useGetAllWeatherData();

  const listLoadingComponent = React.useMemo(
    () =>
      isLoading ? (
        <StyledActivityIndicator testID={'indicatorTestId'} />
      ) : error ? (
        <Text testID={'errorTestID'}>Something went wrong :(</Text>
      ) : null,
    [isLoading, error],
  );

  const renderItem: ListRenderItem<WeatherData> = React.useCallback(
    ({ item }) => <WeatherCard weatherApiData={item} />,
    [data],
  );
  return (
    <HomeContainer>
      <FlatList
        data={data?.list}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isRefetching}
        keyExtractor={(item, index) => item.id + index.toString()}
        scrollEventThrottle={16}
        ListEmptyComponent={listLoadingComponent}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        ItemSeparatorComponent={() => <Divider />}
      />
      <CustomButton
        onPress={() => {
          NotificationInterface.showNativeNotification(
            'An Amazing Title',
            'An Amazing Description',
          );
        }}
        enabled={true}
        text={'Show Notification'}
      />
    </HomeContainer>
  );
};

export default Home;
