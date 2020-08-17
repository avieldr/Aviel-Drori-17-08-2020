import { apiKey } from './config'

class WeatherApi {
    constructor() {
        console.log("in weather api constructor")
    }

    getAdminAreaList = async () => {
        console.log('getAdminAreaList')

        try {
            var jsonFromFile = require('../../api_queries_outputs/AdminAreaList-country-.json')
            return jsonFromFile

            // let countryCode = 'countryCode'
            // console.log('in try block')
            // let response = await fetch(
            //     `http://dataservice.accuweather.com/locations/v1/adminareas/${countryCode}?apikey=${apiKey}`
            // )
            // let json = await response.json()
            // // console.log(JSON.stringify(json))
            // return json
        } catch (error) {
            console.log('getAdminAreaList error: ', error)
        }
    }

    getCitySearch = async (query) => {
        console.log('getCitySearch')

        try {
            var jsonFromFile = require('../../api_queries_outputs/CitySearch-jerusalem-.json')
            return jsonFromFile

            // let response = await fetch(
            //     `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`
            // )
            // let json = await response.json()
            // // console.log(JSON.stringify(json))
            // return json
        } catch (error) {
            console.log('getCitySearch error: ', error)
        }
    }

    getAutocompleteSearch = async (query) => {
        console.log('getAutocompleteSearch')

        try {
            var jsonFromFile = require('../../api_queries_outputs/AutoComplete-jeru-.json')
            return jsonFromFile

            // let response = await fetch(
            //     `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
            // )
            // let json = await response.json()
            // console.log(JSON.stringify(json))
            // return json
        } catch (error) {
            console.log('getAutocompleteSearch error: ', error)
        }
    }

    getCurrentConditions = async (locationKey, details=false) => {
        console.log('getCurrentConditions')

        try {
            var jsonFromFile = require('../../api_queries_outputs/CurrentConditions-213225-.json')
            return jsonFromFile

            // let response = await fetch(
            //     `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=${details}`
            // )
            // let json = await response.json()
            // // console.log(JSON.stringify(json))
            // return json
        } catch (error) {
            console.log('getCurrentConditions error: ', error)
        }
    }

    get5DaysDailyForecasts = async (locationKey, details=false) => {
        console.log('get5DaysDailyForecasts')

        try {
            var jsonFromFile = require('../../api_queries_outputs/5DaysDailyForecasts-213225-.json')
            return jsonFromFile

            // let response = await fetch(
            //     `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=${details}`
            // )
            // let json = await response.json()
            // console.log(JSON.stringify(json))
            // return json
        } catch (error) {
            console.log('get5DaysDailyForecasts error: ', error)
        }
    }
}

const instance = new WeatherApi()

export default instance
