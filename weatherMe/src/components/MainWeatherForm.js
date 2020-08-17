import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as WeatherContext } from '../context/WeatherContext'
import { Text, Button, Input } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import ForecastsList from './ForecastsList'



const MainWeatherForm = () => {
    const { state, updateFavorites } = useContext(WeatherContext)

    const { currentLocation, currentConditions, favoritesList } = state
    if (!currentLocation?.LocalizedName) return <View></View>


    const toggleInFavorites = (isFavorite, currentLocIdxInFavorites) => {
        if (!isFavorite) {
            updateFavorites([ ...favoritesList, currentLocation ])
        } else {
            favoritesList.splice(currentLocIdxInFavorites, 1)
            updateFavorites(favoritesList)
        }
    }
    const currentLocIdxInFavorites = favoritesList.findIndex(item => item.Key === currentLocation.Key)
    const isFavorite = currentLocIdxInFavorites !== -1

    return (
        
        <View style={styles.container}>

            <View style={styles.headContainer}>
                {currentConditions?.Temperature 
                ? <View style={styles.currentTempStatus}>
                        <Text>{currentLocation.LocalizedName}</Text>
                        <Text>{currentConditions.Temperature.Imperial.Value}° {currentConditions.Temperature.Imperial.Unit}</Text>
                    </View> 
                    : <Text>No Data</Text>
                }

                <TouchableOpacity
                onPress={() => toggleInFavorites(isFavorite, currentLocIdxInFavorites)}
                style={styles.toggleFavorites}
                >
                    
                    <Text>{ isFavorite ? "Remove from Favorites" : "Add to Favorites" }</Text>
                    <FontAwesome name={ isFavorite ? "star" : "star-o" } size={20} style={styles.iconStyle} />
                </TouchableOpacity>
            </View>

            <View style={styles.WeatherText}>
                <Text h1>{currentConditions.WeatherText}</Text>
            </View>


            <View style={styles.forecastsList}>
                <ForecastsList />
            </View>
        
        </View> 
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
    },
    toggleFavorites: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    currentTempStatus: { 
        flex: 1,
        borderColor: 'green',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    WeatherText: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    forecastsList: {
        flex: 5,
        borderColor: 'orange',
        borderWidth: 1,
    },
    iconStyle: { 
        marginRight: 5,
        marginLeft: 5 
    }
});

export default MainWeatherForm;