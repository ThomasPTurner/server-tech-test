process.env.NODE_ENV = 'test';
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));
const app = require('../app');
const request = require('supertest')(app);
const { getRestaurantsFromJson } = require('../models/index')

describe('models', () => {
    it('returns an array of non-zero length', () => {
        getRestaurantsFromJson()
            .then(restaurants => {
                expect(restaurants.length).to.be.greaterThan(0)
            })
    });
});

describe('/api', ()=>{
    describe('/restaurants', ()=>{
        describe('GET', ()=>{
            it('200 on request', ()=>{
                return request
                    .get('/api/restaurants')
                    .expect(200)
            })
        })
    })
})