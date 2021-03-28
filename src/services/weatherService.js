const WeatherRepository = require("../repositories/weatherRepository");
const weatherRepo = new WeatherRepository();
const CityRepository = require("../repositories/cityRepository");
const cityRepo = new CityRepository();
const Logger = require("../loaders/logger");

const weatherByCoordinatesLogic = async (lon, lat) => {
  const weather = await weatherRepo.weatherByCoordinates(lon, lat);

  // Logger.silly(JSON.stringify(weather))

  return {
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    temperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
  };
};

const weatherByCityIdLogic = async (city, id) => {
  const cities = await cityRepo.findCities(city);

  const cityFiltered = cities.features.find((e) => e.id === id);
  Logger.silly(`cityFiltered: ${cityFiltered[0]}`);
  const lon = cityFiltered.geometry.coordinates[0];
  const lat = cityFiltered.geometry.coordinates[1];
  return await weatherByCoordinatesLogic(lon, lat);
};
module.exports = { weatherByCoordinatesLogic, weatherByCityIdLogic };
