import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import LocThumbnail from '../components/FavoritesLocThumbnail'

const FavoritesScreen = () => {
    return <SafeAreaView>
        <LocThumbnail 
            id='1'
            name="Jerusalem"
            currentWeather="Sunny"
        />
        <LocThumbnail 
            id='2'
            name="Tel Aviv"
            currentWeather="Hot like hell"
        />
    </SafeAreaView>
}

FavoritesScreen.navigationOptions = {
    title: 'Favorites',
    tabBarIcon: <FontAwesome name="star" size={20} />,
    
};

const styles = StyleSheet.create({

});

export default FavoritesScreen;