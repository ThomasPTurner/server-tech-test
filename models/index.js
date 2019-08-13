const { getFromJson } = require('../utils')

const getRestaurantsFromJson = async () => {
   return await getFromJson()
}

module.exports = {
    getRestaurantsFromJson,
}