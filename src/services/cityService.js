const CityRepository = require('../repositories/cityRepository');

const repository = new CityRepository;

const findCitiesLogic = async (city) => {
    const cities = await repository.findCities(city);

    return cities.features.map(e => {
        return {
            id : e.id,
            lon: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1]
        }
    })
}
module.exports = {findCitiesLogic}