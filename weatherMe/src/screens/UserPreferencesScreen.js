import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons'
import { theme1, theme2 } from '../resources'


import { Context as WeatherContext } from '../context/WeatherContext'; 



const UserPreferencesScreen = () => {
    const { toggleThemeColor, state: { themePreference } } = useContext(WeatherContext)

    const theme = themePreference ? theme1 : theme2
    
    return <SafeAreaView style={[styles.container, { backgroundColor: theme.favoritesBackground }]}>

            <View style={[styles.headerContainer, { borderBottomColor: theme.borders }]}>
                <Text style={[styles.headerText, { color: theme.titles }]}>USER PREFERENCSE</Text>
            </View>

        

            <Button 
            color='white'
            title='Tggle Theme Color'
            onPress={() => toggleThemeColor()}
        />
            

        </SafeAreaView>


    
}

UserPreferencesScreen.navigationOptions = {
    title: 'Preferences',
    tabBarIcon: <Fontisto name="player-settings" size={20} />,
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        
        
    },
    headerContainer: {
        alignSelf: 'center',
        marginBottom: 10,
        borderBottomWidth: 2,
        
        
    },
    headerText: {
        fontSize: 24,
        
    }
   
});

export default UserPreferencesScreen;