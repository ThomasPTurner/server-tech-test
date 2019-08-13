const fs = require('fs')
// didn't want to use require() because it's synchronous.
const getRestaurantsFromJson =  () => {
    return new Promise ((resolve, reject) => {
        return fs.readFile('restaurants.json', (err, restaurants)=> {
            if (err) reject(err)
            resolve(JSON.parse(restaurants))
        })
    })
}
module.exports = {
    getRestaurantsFromJson
}