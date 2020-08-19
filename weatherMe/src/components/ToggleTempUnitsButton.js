import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Context as WeatherContext } from '../context/WeatherContext'


import { UNIT_FAHRENHEIT, UNIT_CELSIUS } from '../constants'


const ToggleFavoritesButton = () => {
    const { state: { tempUnit }, toggleTempUnits } = useContext(WeatherContext)


    return (
                
                <TouchableOpacity
                onPress={() => toggleTempUnits()}
                style={styles.toggleFavorites}
                >
                    {/* <Text>{ isFavorite ? "Remove from Favorites" : "Add to Favorites" }</Text> */}
                    <MaterialCommunityIcons name={ "temperature-celsius" } size={30} style={ tempUnit === UNIT_CELSIUS ? styles.activeIconStyle : styles.inActiveIconStyle } />
                    <Text style={{ color: '#B9CDE2'}}>/</Text>
                    <MaterialCommunityIcons name={ "temperature-fahrenheit" } size={30} style={ tempUnit === UNIT_FAHRENHEIT ? styles.activeIconStyle : styles.inActiveIconStyle } />
                    
                </TouchableOpacity>

         
        
        
    )
}

const styles = StyleSheet.create({
    toggleFavorites: {
        borderColor: '#B9CDE2',
        borderWidth: 1,
        borderRadius: 15,
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIconStyle: { 
        color: '#3D6290'
    },
    inActiveIconStyle: { 
        color: '#B9CDE2'
    }
});

export default ToggleFavoritesButton;