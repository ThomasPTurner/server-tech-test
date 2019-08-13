const { expect } = require('chai')
const { getRestaurantsFromJson } = require('../utils')

describe('getRestaurantsFromJson', () => {
    it('returns an array of non-zero length', () => {
        getRestaurantsFromJson()
            .then(restaurants => {
                expect(restaurants.length).to.be.greaterThan(0)
            })
    });
});