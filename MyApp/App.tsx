import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MainNavigator } from './src/navigators';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
