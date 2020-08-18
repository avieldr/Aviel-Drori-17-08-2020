import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import WeatherApi from '../api/weatherApi'
import { FontAwesome } from '@expo/vector-icons'

const FavoritesLocThumbnail = (props) => {
 
    const { name, itemKey } = props
    const [data, setData] = useState('')

    useEffect(() => {
        getCurrentLocData()
    }, []);

    const getCurrentLocData = async () => {
        const res = await WeatherApi.getCurrentConditions(itemKey)
        setData(res[0])
    }

    

    return <View style={styles.item}>
        <Text>{name}</Text>
        <Text>{itemKey}</Text>
        <Text>{data? data.Temperature.Metric.Value : null}</Text>
        <TouchableOpacity
        onPress={() => {
            console.log(data)
        }}
        >
            <FontAwesome name="arrow-circle-o-right" size={20}/>
        </TouchableOpacity>
        
    </View>
}

const styles = StyleSheet.create({
    item: {
        width: '80%',
        minHeight: 100,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 20
    },
});

export default FavoritesLocThumbnail;