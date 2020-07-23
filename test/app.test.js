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
                    expect(res.body).to.have.property('code');

                    return done();
                });
        });
        it('should return error when url format is invalid', (done) => {
            request(app)
                .post('/shortly/shorten')
                .send({ url: 'invalid url' })
                .end((err, res) => {
                    if (err) return done(err);

                    expect(res.status).to.be.equal(422);
                    expect(res.body).to.have.property('error');
                    expect(res.body.error).to.eq('Invalid URL');

                    return done();
                });
        });
    });
});
