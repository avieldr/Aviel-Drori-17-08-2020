import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Context as WeatherContext } from '../context/WeatherContext'
import LocItem from '../components/FavoritesLocThumbnail'

const FavoritesScreen = ({ navigation }) => {
    const { state: { favoritesList } } = useContext(WeatherContext)

    const renderItem = ({ item }) => {
        return <LocItem 
            currentItem={item}
            nav={navigation}
        />
    }

    return <SafeAreaView style={styles.container}>


            <FlatList
                data={favoritesList}
                renderItem={renderItem}
                keyExtractor={item => item.Key}
            />
     
    </SafeAreaView>
}

FavoritesScreen.navigationOptions = {
    title: 'Favorites',
    tabBarIcon: <FontAwesome name="star" size={20} />,
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 40,
        
    },
   
});

export default FavoritesScreen;