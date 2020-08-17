import React, { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import { Context as WeatherContext } from '../context/WeatherContext'


const ForecastsList = (props) => {
    const { state } = useContext(WeatherContext)


      // const fiveDaysForecasts = currentLocationData?.fiveDays.DailyForecasts

    // if (fiveDaysForecasts) {
    //     for (let i = 0; i < fiveDaysForecasts.length; i++) {
    //         const element = fiveDaysForecasts[i];

    //         var dt = new Date(element.Date)
    //         console.log(weekDaysStr[dt.getDay()])
    //         console.log(element)
    //     }
    // }
    
    return <View>
      {/* {
               state.ForecastsList. names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            } */}
    </View> 
    
}

const styles = StyleSheet.create({

});

export default ForecastsList;