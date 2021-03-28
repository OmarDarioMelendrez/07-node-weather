const axios = require('axios')

const config = require('../config')

class WeatherRepository {
    constructor(){
        this.units = "metric";
        this.lang = "es";
        this.pathBase = config.openWeatherMap.pathBase;
        this.appid = config.openWeatherMap.apikey;
    }

    async weatherByCoordinates(lon,lat) {
        try {
            
            const instance = axios.create({
                baseURL: `${this.pathBase}`,
                params: {
                    "appid": this.appid,
                    "lang": this.lang,
                    "units": this.units,
                    lon,
                    lat
                }
            })
            
            const response = await instance.get()
            return response.data
        } catch (err) {
            throw err
        }
    }
}

module.exports = WeatherRepository