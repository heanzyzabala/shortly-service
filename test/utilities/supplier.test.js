/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const chai = require('chai');
chai.use(require('chai-match'));

const { expect } = chai;

const { supply } = require('../../src/utilities');

describe('supplier', () => {
    describe('#supplier', () => {
        it('should generate code and match pattern', () => {
            const actual = supply();
            expect(actual).to.match(/[A-Za-z0-9_-]{6}/);
        });
    });
});
