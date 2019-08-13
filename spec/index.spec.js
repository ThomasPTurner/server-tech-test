process.env.NODE_ENV = 'test';
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));
const app = require('../app');
const request = require('supertest')(app);

describe('/api', ()=>{
    describe('/restaurants', ()=>{
        describe('GET', ()=>{
            it('200 on request', ()=>{
                return request
                    .get('/api/restaurants/')
                    .expect(200)
            })
        })
    })
})