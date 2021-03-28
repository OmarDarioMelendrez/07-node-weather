const { Router } = require('express');
const {
    cities
} = require('../controllers/cities');

const router = Router();

router.get('/cities/:city', cities);

module.exports = router;