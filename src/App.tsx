import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { View, StatusBar } from 'react-native';
import Routes from './routes';
import AppProvider from './context';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" translucent />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
