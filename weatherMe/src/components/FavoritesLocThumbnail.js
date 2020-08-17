import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FavoritesLocThumbnail = (props) => {
    const { id, name, currentWeather } = props

    return <View>
        <Text>{name}</Text>
        <Text>{currentWeather}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default FavoritesLocThumbnail;