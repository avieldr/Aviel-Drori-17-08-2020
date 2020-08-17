import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './src/screens/MainScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

// import { Provider as WeatherProvider } from './src/context/WeatherContext';

const tabNavigator =  createBottomTabNavigator({
  Main: MainScreen,
  Favorites: FavoritesScreen,
})


const App = createAppContainer(tabNavigator);
export default () => {
  return (
    // <WeatherProvider>
      <App/>
    // </WeatherProvider>
  );
};