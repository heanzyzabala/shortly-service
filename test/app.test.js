/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const request = require('supertest');
const { expect } = require('chai');

const app = require('../src/app');

describe('app', () => {
    describe('POST /shorten', () => {
        describe('should successfully generate code', () => {
            it('generate code', (done) => {
                request(app)
                    .post('/api/shorten')
                    .send({ url: 'http://google.com' })
                    .end((err, res) => {
                        if (err) return done(err);

                        expect(res.status).to.be.equal(201);
                        expect(res.body).to.have.property('code');

                        return done();
                    });
            });
        });
        describe('should return error when url is invalid', () => {
            it('generate code', (done) => {
                request(app)
                    .post('/api/shorten')
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
    describe('GET /:code', () => {
        describe('should successfully redirect', () => {
            let code;
            it('generate code', (done) => {
                request(app)
                    .post('/api/shorten')
                    .send({ url: 'http://google.com' })
                    .end((err, res) => {
                        if (err) return done(err);

                        expect(res.status).to.be.equal(201);
                        expect(res.body).to.have.property('code');

                        code = res.body.code;
                        return done();
                    });
            });
            it('redirect url', (done) => {
                request(app)
                    .get(`/api/${code}`)
                    .end((err, res) => {
                        if (err) return done(err);

                        expect(res.status).to.be.equal(302);
                        expect(res.header.location).to.be.equal('http://google.com');

                        return done();
                    });
            });
        });
        describe('should return error when code does not exist', () => {
            it('redirect url', (done) => {
                request(app)
                    .get('/api/000000')
                    .end((err, res) => {
                        if (err) return done(err);

                        expect(res.status).to.be.equal(404);

                        return done();
                    });
            });
        });
    });
});
