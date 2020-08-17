import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './src/screens/MainScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import DebugScreen from './src/screens/DebugScreen';

import { Provider as WeatherProvider } from './src/context/WeatherContext';

const tabNavigator =  createBottomTabNavigator({
  Main: MainScreen,
  Favorites: FavoritesScreen,
  Debug: DebugScreen
})


const App = createAppContainer(tabNavigator);
export default () => {
  return (
    <WeatherProvider>
      <App/>
    </WeatherProvider>
  );
};