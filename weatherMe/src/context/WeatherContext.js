import createDataContext from './createDataContext';
import WeatherApi from '../api/weatherApi';

import { tempUnitsArr } from '../constants'



const weatherReducer = (state, action) => {
    switch (action.type) {



        case 'set_current_location':
            const excludeCond1 = !action.payload.Key
            const excludeCond2 = state.currentLocation && state.currentLocation.Key === action.payload.Key
            // console.log("cond1: ", excludeCond1)
            // console.log("cond2: ", excludeCond2)
            if (excludeCond1 || excludeCond2) return state
            return { ...state, currentLocation: action.payload, currentConditions: [] };
        case 'update_current_conditions':
            return { ...state, currentConditions: action.payload[0] }



        case 'update_favorites_list':
            return { ...state, favoritesList: action.payload }
        default:
            return state;
    }
};

const setCurrentLocation = dispatch => (newLocation) => {
    console.log('CALLED: setCurrentLocation')
    dispatch({ type: 'set_current_location', payload: newLocation})
}

const updateFavorites = dispatch => (updatedFavoritesList) => {
    console.log('CALLED: updateFavorites')
    dispatch({ type: 'update_favorites_list', payload: updatedFavoritesList})
}

const getCurrentConditions = dispatch => async (locationKey) => {
    console.log('CALLED: getCurrentConditions. locationKey: ', locationKey)
    if (!locationKey) return

    const res = await WeatherApi.getCurrentConditions(locationKey)
    dispatch({ type: 'update_current_conditions', payload: res })
}



export const { Context, Provider } = createDataContext(
    weatherReducer,
    { setCurrentLocation, updateFavorites, getCurrentConditions },
    { 
        favoritesList: [], 
        currentLocation: null, 
        currentConditions: [], 
        // userPreferences: {
        //     tempUnit: 0,
        //     theme: 0
        // }
    }
);