import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Context as WeatherContext } from '../context/WeatherContext'
import { Text, Button, Input } from 'react-native-elements'
import { iconImages } from '../constants'



const CurrentStatus = (props) => {
    const { state: { currentLocation, currentConditions } } = useContext(WeatherContext)


    return (
    
            currentConditions?.Temperature 
            ? <View style={styles.container}>

                

                <View style={styles.leftContainer}>
                    <Text style={{ fontSize: 65, paddingLeft: 15 }} >{currentConditions.Temperature.Imperial.Value}° {currentConditions.Temperature.Imperial.Unit}</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Image 
                        source={ iconImages[currentConditions.WeatherIcon] }
                        style={styles.imageStyle}
                    />
                    <Text>{currentConditions.WeatherText}</Text>
                </View>
                    
            </View> 
            : <Text>No Data</Text>
            

        
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 3,
        flexDirection: 'row',
        // borderColor: 'green',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    rightContainer: {
        // borderWidth: 3,
        // borderColor: 'red',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    leftContainer: {
        // borderWidth: 3,
        // borderColor: 'brown'
    },
    imageStyle: {
        height: 90,
        width: 90
    }
});

export default CurrentStatus