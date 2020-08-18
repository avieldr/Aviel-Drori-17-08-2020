export const weekDaysStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const tempUnitsArr = ['C', 'F']

export const jerusalemLocationExample = {
    "Version":1,
    "Key":"213225",
    "Type":"City",
    "Rank":30,
    "LocalizedName":"Jerusalem",
    "Country": {
        "ID":"IL",
        "LocalizedName":"Israel"
    },
    "AdministrativeArea": {
        "ID":"JM",
        "LocalizedName":"Jerusalem"
    }
}

export const jerusalemCurrentConditionsExample = {
    "LocalObservationDateTime":"2020-08-17T15:45:00+03:00",
    "EpochTime":1597668300,
    "WeatherText":"Sunny",
    "WeatherIcon":1,
    "HasPrecipitation":false,
    "PrecipitationType":null,
    "IsDayTime":true,
    "Temperature": {
        "Metric": {
            "Value":30.8,
            "Unit":"C",
            "UnitType":17
        },
        "Imperial":{
            "Value":87,
            "Unit":"F",
            "UnitType":18
        }
    },
    "MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
    "Link":"http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us"
}

export const jeru5DaysExample = {
    "Headline":{
    "EffectiveDate":"2020-08-22T08:00:00+03:00",
    "EffectiveEpochDate":1598072400,
    "Severity":7,
    "Text":"Mostly sunny this weekend",
    "Category":"",
    "EndDate":null,
    "EndEpochDate":null,
    "MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/extended-weather-forecast/213225?lang=en-us",
    "Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date":"2020-08-17T07:00:00+03:00",
            "EpochDate":1597636800,
            "Temperature":{
                "Minimum":{
                    "Value":64,
                    "Unit":"F",
                    "UnitType":18
                },
                "Maximum":{
                    "Value":87,
                    "Unit":"F",
                    "UnitType":18
                }},
                "Day":{
                    "Icon":1,
                    "IconPhrase":"Sunny",
                    "HasPrecipitation":false
                },
                "Night":{
                    "Icon":33,
                    "IconPhrase":"Clear",
                    "HasPrecipitation":false
                },
                "Sources":["AccuWeather"],
                "MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us",
                "Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us"
        },
        {
            "Date":"2020-08-18T07:00:00+03:00",
            "EpochDate":1597723200,
            "Temperature":{
                "Minimum":{
                    "Value":66,
                    "Unit":"F",
                    "UnitType":18
                },
                "Maximum":{
                    "Value":85,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&lang=en-us","Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&lang=en-us"},{"Date":"2020-08-19T07:00:00+03:00","EpochDate":1597809600,"Temperature":{"Minimum":{"Value":64,"Unit":"F","UnitType":18},"Maximum":{"Value":85,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":33,"IconPhrase":"Clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&lang=en-us","Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&lang=en-us"},{"Date":"2020-08-20T07:00:00+03:00","EpochDate":1597896000,"Temperature":{"Minimum":{"Value":67,"Unit":"F","UnitType":18},"Maximum":{"Value":86,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&lang=en-us","Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&lang=en-us"},{"Date":"2020-08-21T07:00:00+03:00","EpochDate":1597982400,"Temperature":{"Minimum":{"Value":68,"Unit":"F","UnitType":18},"Maximum":{"Value":84,"Unit":"F","UnitType":18}},"Day":{"Icon":1,"IconPhrase":"Sunny","HasPrecipitation":false},"Night":{"Icon":34,"IconPhrase":"Mostly clear","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&lang=en-us",
                "Link":"http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&lang=en-us"}]}


export const iconImages = {
    '1': require('./resources/1-s.png'),
    '2': require('./resources/2-s.png'),
    '3': require('./resources/3-s.png'),
    '4': require('./resources/4-s.png'),
    '5': require('./resources/5-s.png'),
    '6': require('./resources/6-s.png'),
    '7': require('./resources/7-s.png'),
    '8': require('./resources/8-s.png'),
    '11': require('./resources/11-s.png'),
    '12': require('./resources/12-s.png'),
    '13': require('./resources/13-s.png'),
    '14': require('./resources/14-s.png'),
    '15': require('./resources/15-s.png'),
    '16': require('./resources/16-s.png'),
    '17': require('./resources/17-s.png'),
    '18': require('./resources/18-s.png'),
    '19': require('./resources/19-s.png'),
    '20': require('./resources/20-s.png'),
    '21': require('./resources/21-s.png'),
    '22': require('./resources/22-s.png'),
    '23': require('./resources/23-s.png'),
    '24': require('./resources/24-s.png'),
    '25': require('./resources/25-s.png'),
    '26': require('./resources/26-s.png'),
    '29': require('./resources/29-s.png'),
    '30': require('./resources/30-s.png'),
    '31': require('./resources/31-s.png'),
    '32': require('./resources/32-s.png'),
    '33': require('./resources/33-s.png'),
    '34': require('./resources/34-s.png'),
    '35': require('./resources/35-s.png'),
    '36': require('./resources/36-s.png'),
    '37': require('./resources/37-s.png'),
    '38': require('./resources/38-s.png'),
    '39': require('./resources/39-s.png'),
    '40': require('./resources/40-s.png'),
    '41': require('./resources/41-s.png'),
    '42': require('./resources/42-s.png'),
    '43': require('./resources/43-s.png'),
    '44': require('./resources/44-s.png'),
    
}