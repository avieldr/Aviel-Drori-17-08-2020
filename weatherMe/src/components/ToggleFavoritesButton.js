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
                style={styles.toggleFavorites}
                >
                    <Text>{ isFavorite ? "Remove from Favorites" : "Add to Favorites" }</Text>
                    <FontAwesome name={ isFavorite ? "star" : "star-o" } size={20} style={styles.iconStyle} />
                    
                </TouchableOpacity>

         
        
        
    )
}

const styles = StyleSheet.create({
    toggleFavorites: {
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 8,
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center'
    },
    iconStyle: { 
        marginRight: 5,
        marginLeft: 5 
    }
});

export default ToggleFavoritesButton;