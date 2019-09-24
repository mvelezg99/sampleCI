const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('Unit testing the / route', function() {

    it('should return OK status', function() {
        return request(app)
            .get('/')
            .then(function(response){
                assert.equal(response.status, 200)
            })
    });

    it('should return Welcome >>> to Express on rendering', function() {
        return request(app)
            .get('/')
            .then(function(response){
                expect(response.text).to.contain('<h1>Express</h1><p>Welcome >>> to Express</p>');
            })
    });
});