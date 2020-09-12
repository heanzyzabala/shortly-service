/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { sanitize } = require('../../src/utilities');

describe('sanitizer', () => {
    describe('#sanitize', () => {
        it('should sanitize url', () => {
            const url = 'google.com';
            const actual = sanitize(url);
            expect(actual).to.be.equal(`http://${url}`);
        });
        it('should return as is', () => {
            let url = 'http://google.com';
            let actual = sanitize(url);
            expect(actual).to.be.equal(url);

            url = 'https://google.com';
            actual = sanitize(url);
            expect(actual).to.be.equal(url);
        });
    });
});
