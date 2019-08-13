const  { getRestaurantsFromJson } = require('../models/index')

const getRestaurants = async (req, res, next) => {
    const restaurants = await getRestaurantsFromJson()
    return res.status(200).send({restaurants})
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