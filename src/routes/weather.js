const { Router } = require('express');
const {
    weatherByCoordinates,
    weatherByCityId

} = require('../controllers/weather');

const router = Router();

router.get('/weather', weatherByCoordinates);
router.get('/weather/:city/:id', weatherByCityId);

module.exports = router;