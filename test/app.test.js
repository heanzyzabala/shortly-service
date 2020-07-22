/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const request = require('supertest');
const { expect } = require('chai');

const app = require('../src/app');

describe('app', () => {
    describe('POST /shorten', () => {
        it('should successfully generate code', (done) => {
            request(app)
                .post('/shortly/shorten')
                .send({ url: 'http://google.com' })
                .end((err, res) => {
                    if (err) return done(err);

                    expect(res.status).to.be.equal(201);

                    return done();
                });
        });
    });
});
