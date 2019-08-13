const  { getRestaurantsFromJson } = require('../models/index')

const getRestaurants = async (req, res, next) => {
    const restaurants = await getRestaurantsFromJson()
    return res.status(200).send({restaurants})
}

const getRestaurantById = async ({params: {restaurant_id}}, res, next) => {
    const restaurants = await getRestaurantsFromJson()

    const [restaurant] = restaurants.filter(({id})=> {
        return(+id === +restaurant_id)
    })
    return res.status(200).send({ restaurant })
} 

module.exports = {
    getRestaurants,
    getRestaurantById
}