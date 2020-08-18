import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Context as WeatherContext } from '../context/WeatherContext'
import LocItem from '../components/FavoritesLocThumbnail'
const FavoritesScreen = () => {
    const { state: { favoritesList } } = useContext(WeatherContext)


    const renderItem = ({ item }) => {
        return <LocItem 
            name={item.LocalizedName}
            itemKey={item.Key}
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
        borderRightColor: 'black',
        borderWidth: 1
    },
    item: {
        width: '80%',
        minHeight: 100,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 20
    },
    listStyle: {
        flex: 1,
    }
});

export default FavoritesScreen;