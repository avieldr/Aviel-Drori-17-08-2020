import React, { useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import WeatherApi from '../api/weatherApi'
import { FontAwesome } from '@expo/vector-icons'

import SearchInput from '../components/SearchInput'
import ForecastsList from '../components/ForecastsList'
import MainWeatherForm from '../components/MainWeatherForm'

import { weekDaysStr, jerusalemLocationExample } from '../constants'
import { Context as WeatherContext } from '../context/WeatherContext'; 
import { State } from 'react-native-gesture-handler'




const MainScreen = () => {
    const { state, setCurrentLocation, updateFavorites, getCurrentConditions } = useContext(WeatherContext)

    const { currentLocation } = state
    
    useEffect(() => {
        setCurrentLocation(jerusalemLocationExample)
    }, []);

    useEffect(() => {
        getCurrentConditions(currentLocation?.Key)
    }, [currentLocation]);

    
    
    return <SafeAreaView style={styles.container}>
        <SearchInput />

        <MainWeatherForm />


    </SafeAreaView> 
    
}

MainScreen.navigationOptions = {
    title: 'Main',
    tabBarIcon: <FontAwesome name="home" size={20} />,
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20
    }
});

export default MainScreen;