const { Router } = require('express')
const restaurantsRouter = Router()
const { getRestaurants } = require('../controllers/index') 

restaurantsRouter.get('/', getRestaurants)

module.exports = restaurantsRouter