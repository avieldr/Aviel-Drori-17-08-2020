import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native'
import { Input } from 'react-native-elements'
import WeatherApi from '../api/weatherApi'
import { Feather } from '@expo/vector-icons'
import { Context as WeatherContext } from '../context/WeatherContext'; 



const SearchInput = () => {

    const [state, setState] = useState({ searchQuery: '', searchSuggestions: [], modalVisible: false})
    const {
        setCurrentLocation,
    } = useContext(WeatherContext)

    const minPrefLenToSuggest = 3
    
    useEffect(() => {
        // console.log("search query changed to: ", state.searchQuery)
        if (state.searchQuery.length >= minPrefLenToSuggest) {
            getSuggestions()
        }
    }, [state.searchQuery]);

    const getSuggestions = async () => {
        console.log('getSuggestions')
        const suggestions = await WeatherApi.getAutocompleteSearch(state.searchQuery)
        if (Array.isArray(suggestions) && suggestions.length) {
            setState({ ...state, searchSuggestions: suggestions.slice(0, 5), modalVisible: true })
        }
    }

    const renderSuggestionItem = (item, index) => {
         
        return <View style={styles.suggestionItem} key={index}>
            <TouchableOpacity
            onPress={() => {
                setCurrentLocation(item)
                setState({ ...state, modalVisible: false, searchQuery: '' })
            }}
            style={styles.suggestionLeftClickable}>
                <Text >{item.LocalizedName}, {item.Country.LocalizedName}</Text>
                <Feather name="arrow-up-right" size={20} color='gray' style={styles.iconRight}/>
            </TouchableOpacity>
            
        
        </View>
    }
    return <View>

        <Input
            style={styles.input}
            label='Search'
            placeholder='Search Location'
            value={state.searchQuery}
            onChangeText={(text) => {
                if (text.length < minPrefLenToSuggest && state.modalVisible) {
                    setState({ ...state, modalVisible: false, searchQuery: text })
                } else {
                    setState({ ...state, searchQuery: text })
                }
                }}
            onEndEditing={() => {console.log('onEndEditing')}}
            onSubmitEditing={query => console.log('onSubmitEditing', query.nativeEvent.text)}
            autoCapitalize='none'
            autoCorrect={false}

        />
        {state.modalVisible && 
            <View style={styles.suggestionsList}>
            { 
                state.searchSuggestions.length > 0
                ? state.searchSuggestions.map((item, index) => (
                    renderSuggestionItem(item, index)
                ))
                : <Text>No Suggestions Found...</Text>
            }
        
        </View>
           
        }
    </View> 
    
}

const styles = StyleSheet.create({
    suggestionsList: {
        marginBottom: 30,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    input: {
        borderColor: 'blue',
        borderWidth: 1
    },
    suggestionItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    suggestionLeftClickable: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconLeft: {
        marginRight: 14
    },
    iconRight: {
        marginLeft: 14
    },
});

export default SearchInput;