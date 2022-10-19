import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens/Home';
import WeatherDetails from '../screens/WeatherDetails/WeatherDetails';

/**
 * Component that renders the main navigator of the app
 */
const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Weather'} component={Home} />
        <Stack.Screen name={'Details'} component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
