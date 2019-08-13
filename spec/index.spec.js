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
    describe('api/restaurants', ()=>{
        describe('GET', ()=>{
            it('200 on request', ()=>{
                return request
                    .get('/api/restaurants')
                    .expect(200)
            })
            it('delivers an array of restaurants', ()=>{
                const keys = ['id', 'name', 'address', 'cuisine', 'dog-friendly', 'vegan-options', 'rating'] 
                return request
                    .get('/api/restaurants')
                    .then(({ body: {restaurants}}) => {
                        expect(restaurants[0]).to.include.keys(keys)
                    })
            })
        })
        describe('api/restaurants/:restaurant_id', () => {
            it('200 on request', () => {
                return request
                    .get('/api/restaurants/2')
                    .expect(200)
                    .then(({body: { restaurant: {id} }})=>{
                        expect(id).to.equal(2)
                    })
            });
            // it('delivers target restaurant', () => {
            //     return request
            //         .get('/api/restaurant/2')
            //         .expect(200)
            //         .then(({body: { restaurant: {id} }})=>{
            //             expect(id).to.equal(2)
            //         })
            // });
        });
    })
})