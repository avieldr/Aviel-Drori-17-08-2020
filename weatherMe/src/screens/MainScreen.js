import React, { useEffect, useContext } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

import SearchInput from '../components/SearchInput'
import ForecastsList from '../components/ForecastsList'

import { weekDaysStr, jerusalemLocationExample } from '../constants'
import { Context as WeatherContext } from '../context/WeatherContext'; 

import CurrentStatus from '../components/CurrentStatus'
import ToggleFavoritesButton from '../components/ToggleFavoritesButton'


const MainScreen = () => {
    const { state: { currentLocation, currentConditions, favoritesList },
        setCurrentLocation,
        getCurrentConditions,
        get5DaysDailyForecasts
    } = useContext(WeatherContext)

    
    useEffect(() => {
        setCurrentLocation(jerusalemLocationExample)
    }, []);

    useEffect(() => {
        getCurrentConditions(currentLocation?.Key)
        get5DaysDailyForecasts(currentLocation?.Key)
    }, [currentLocation]);

    
    
    return <SafeAreaView style={styles.container}>
        <ScrollView>
        <SearchInput />

<View style={styles.bodyContainer}>

    <View style={styles.headContainer}>
        <Text style={styles.locationNameHeader}>{ currentLocation?.LocalizedName || null }</Text>
        <ToggleFavoritesButton />
    </View>
    
    <CurrentStatus />
    
    <View style={styles.forecastsList}>
        <ForecastsList />
    </View>

</View> 

        </ScrollView>
        

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
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
    },
    headContainer: {
        flex: 1,
        // borderColor: 'blue',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    currentTempStatus: { 
        flex: 3,
        flexDirection: 'row',
        // borderColor: 'green',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    WeatherText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    forecastsList: {
        flex: 6,
        // borderColor: 'orange',
        // borderWidth: 1,
    },
    iconStyle: { 
        marginRight: 5,
        marginLeft: 5 
    },
    locationNameHeader: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
    }
});

export default MainScreen;