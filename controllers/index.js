const { getRestaurantsFromJson } = require('../models/index')
const { filterObjectsByMultipleKeys } = require('../utils')

const getRestaurants = async ({query}, res, next) => {
    const restaurants = await getRestaurantsFromJson()
    const { cuisine, ...restOfQuery} = query
    const filteredRestaurants = filterObjectsByMultipleKeys(restaurants, {...restOfQuery})
    return res.status(200).send({restaurants: filteredRestaurants})
}

const getRestaurantById = async ({params: {restaurant_id}}, res, next) => {
    const restaurants = await getRestaurantsFromJson()
    const restaurant = restaurants.filter(({id})=> {
        return(+id === +restaurant_id)
    })
    if (restaurant.length === 1) {
        return res.status(200).send({ restaurant: restaurant[0] })
    }
    return res.status(404).send({status:404, msg:"not found"})
} 

module.exports = {
    getRestaurants,
    getRestaurantById
}