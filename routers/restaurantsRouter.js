const { Router } = require('express')
const restaurantsRouter = Router()
const { getRestaurants, getRestaurantById } = require('../controllers/index') 

restaurantsRouter.get('/', getRestaurants)
restaurantsRouter.get('/:restaurant_id', getRestaurantById)

module.exports = restaurantsRouter