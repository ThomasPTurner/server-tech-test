const  { getRestaurantsFromJson } = require('../models/index')

const getRestaurants = async (req, res, next) => {
    const restaurants = await getRestaurantsFromJson()
    return res.status(200).send({restaurants})
}

module.exports = {
    getRestaurants
}