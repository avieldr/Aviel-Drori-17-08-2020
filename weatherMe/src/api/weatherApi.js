import React from 'react'
import { Alert } from 'react-native'
import { defaultApiKey } from './config'
import axios from 'axios'
import { errors } from '../constants'
// import { AsyncStorage } from 'react-native';

const mock = false
class WeatherApi {

    constructor() {
        this.apiKey = defaultApiKey
        this.instance =  axios.create({
            baseURL: 'http://dataservice.accuweather.com'           
        });

        this.instance.interceptors.request.use(
            config => config,
            err => Promise.reject(err)
        );
        
        this.instance.interceptors.response.use(
            res => res,
            err => {

                if (!err.response) {
                    Alert.alert("Error", err.message)
                } else {
                    switch (err.response.status.toString()) {
                        case '503':
                            Alert.alert(errors['503'].title, errors['503'].message)
                            break
                        default:
                            Alert.alert("Error", err.message)
                    }   
                }
        
                return Promise.reject(err);        
            }
        )
    }

    
    getAdminAreaList = async () => {

        try {
            if (mock)
            {
                var jsonFromFile = require('../../api_queries_outputs/AdminAreaList-country-.json')
                return jsonFromFile
            }
   
            const response = await this.instance.get(`/locations/v1/adminareas/${countryCode}?apikey=${this.apiKey}`);
            console.log('getAdminAreaList responded!')
            return response.data
        } catch (error) {
            console.log('getAdminAreaList error: ', error)
        }
    }

    getCitySearch = async (query) => {

        try {
            if (mock)
            {
                var jsonFromFile = require('../../api_queries_outputs/CitySearch-jerusalem-.json')
                return jsonFromFile
            }
        
            const response = await this.instance.get(`/locations/v1/cities/search?apikey=${this.apiKey}&q=${query}`);
            console.log('getCitySearch responded!')
            return response.data
        } catch (error) {
            console.log('getCitySearch error: ', error)
        }
    }

    getAutocompleteSearch = async (query) => {

        try {
            
            if (mock)
            {
                var jsonFromFile = require('../../api_queries_outputs/AutoComplete-jeru-.json')
                return jsonFromFile
            }
        
            const response = await this.instance.get(`/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${query}`);
            console.log('getAutocompleteSearch responded!')
            return response.data

        } catch (error) {
            console.log('getAutocompleteSearch error: ', error.message)
        }
    }

    getCurrentConditions = async (locationKey, details=false) => {
        
        try {
            
            if (mock)
            {
                var jsonFromFile = require('../../api_queries_outputs/CurrentConditions-213225-.json')
                return jsonFromFile
            }
            const response = await this.instance.get(`/currentconditions/v1/${locationKey}?apikey=${this.apiKey}&details=${details}`);
            console.log('getCurrentConditions responded!')
            return response.data

        } catch (error) {
            console.log('getCurrentConditions error: ', error)
        }
    }

    get5DaysDailyForecasts = async (locationKey, details=false) => {
        try {
            
            if (mock)
            {
                var jsonFromFile = require('../../api_queries_outputs/5DaysDailyForecasts-213225-.json')
                return jsonFromFile
            }
  
            const response = await this.instance.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&details=${details}`);
            console.log('get5DaysDailyForecasts responded!')
            return response.data
        } catch (error) {
            console.log('get5DaysDailyForecasts error: ', error)
        }
    }

}

const apiInstance = new WeatherApi()

export default apiInstance
