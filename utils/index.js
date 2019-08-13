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


// will filter an array based on if it's values of it's composite objects match those in the object in the second argument.
exports.filterObjectsByMultipleKeys = (array, filterObj) => {
    const keysToFilterBy = Object.keys(filterObj)
    return  array.filter(element => {
        return keysToFilterBy.every(key => {
            return (element[key].toString()===filterObj[key])
        })
    })
}

// filters an array of objects based on an array nested within those objects
exports.filterObjectsByNestedArrayContents = (inputArray, key, nestedArrayIncludes) => {
    if (nestedArrayIncludes.length === 0) return inputArray
    return inputArray.filter(element => {
        return element[key].includes(nestedArrayIncludes[0])
    }) 
}