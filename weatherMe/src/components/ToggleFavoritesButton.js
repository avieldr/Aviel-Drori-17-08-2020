import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import { Context as WeatherContext } from '../context/WeatherContext'




const ToggleFavoritesButton = () => {
    const { state: { favoritesList, currentLocation }, updateFavorites } = useContext(WeatherContext)

    if (!currentLocation?.Key) return null
    
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
        
                <TouchableOpacity
                onPress={() => toggleInFavorites(isFavorite, currentLocIdxInFavorites)}
                style={[styles.toggleFavorites, isFavorite ? { borderColor: '#3D6290' } : { borderColor: '#B9CDE2' }]}
                >
                    {
                        isFavorite
                        ? <FontAwesome name={ "star" } size={20} style={styles.activeIconStyle} />
                        : <FontAwesome name={ "star-o" } size={20} style={styles.inActiveIconStyle} />
                    }                    
                    
                    
                </TouchableOpacity>

         
        
        
    )
}

const styles = StyleSheet.create({
    toggleFavorites: {
        
        borderWidth: 1,
        borderRadius: 15,
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
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