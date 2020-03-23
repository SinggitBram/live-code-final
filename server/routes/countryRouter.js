const router = require('express').Router()
const CountryController = require('../controllers/countryController')

router.get('/' ,CountryController.getAllCountry)

module.exports = router