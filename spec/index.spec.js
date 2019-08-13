process.env.NODE_ENV = 'test';
const chai = require('chai');
const { expect } = chai;
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
            it('takes a query to filter results', ()=>{
                return request
                    .get('/api/restaurants/?vegan_options=true')
                    .expect(200)
                    .then(({body: {restaurants}}) => {
                        console.log(restaurants)
                        const areAllTrue = restaurants.every(({vegan_options})=> {
                            return vegan_options
                        })
                        expect(areAllTrue).to.be.true
                    })
            })
        })
        describe('api/restaurants/:restaurant_id', () => {
            describe('GET', () => {
                it('200 on request', () => {
                    return request
                        .get('/api/restaurants/2')
                        .expect(200)
                });
                it('delivers target restaurant', () => {
                    return request
                        .get('/api/restaurants/2')
                        .expect(200)
                        .then(({body: { restaurant: {id} }})=>{
                            expect(id).to.equal(2)
                        })
                });
                it('404 on non existent restaurant', ()=> {
                    return request
                        .get('/api/restaurants/9001')
                        .expect(404)
                })
            });
        });
    })
})