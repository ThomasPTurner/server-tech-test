const fs = require('fs')
// didn't want to use require() because it's synchronous.

exports.getFromJson = ()=>{ 
    return new Promise ((resolve, reject) => {
        return fs.readFile('restaurants.json', (err, restaurants)=> {
            if (err) reject(err)
            resolve(JSON.parse(restaurants))
        })
    })
}

exports.filterObjectsWithHyphensInKeys = (array, filterObj) => {
    const keysToFilterBy = Object.keys(filterObj)
    return  array.filter(element => {
        return keysToFilterBy.every(key => {
            return (element[key].toString()===filterObj[key])
        })
    })
}
