import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'


import { Context as WeatherContext } from '../context/WeatherContext'; 



const DebugScreen = () => {
    const { state } = useContext(WeatherContext)

    
    
    return <SafeAreaView>
        <Text style={{ fontSize: 48 }}>Debug Screen</Text>

        <Button 
            title='console log state'
            onPress={async () => {
                console.log("CONSOLE.LOG STATE:")
                console.log(state)
                // const res0 = await WeatherApi.get5DaysDailyForecasts('213225')
                // console.log(res0)
                // const res1 = await WeatherApi.getCitySearch('jerusalem')
                // const res2 = await WeatherApi.getCurrentConditions('213225')
                // console.log(JSON.stringify(res2))
                // console.log(res.map(item => item.LocalizedName + ", " + item.Country.LocalizedName))
            }}
        />

        <Button 
            title='console log favorites'
            onPress={async () => {
                console.log("CONSOLE.LOG FAVORITES:")
                console.log(state.favoritesList)
                // const res0 = await WeatherApi.get5DaysDailyForecasts('213225')
                // console.log(res0)
                // const res1 = await WeatherApi.getCitySearch('jerusalem')
                // const res2 = await WeatherApi.getCurrentConditions('213225')
                // console.log(JSON.stringify(res2))
                // console.log(res.map(item => item.LocalizedName + ", " + item.Country.LocalizedName))
            }}
        />
    </SafeAreaView> 
    
}

DebugScreen.navigationOptions = {
    title: 'Debug',
    tabBarIcon: <FontAwesome name="bug" size={20} />,
    
};

const styles = StyleSheet.create({

});

export default DebugScreen;