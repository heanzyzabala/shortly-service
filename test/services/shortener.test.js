/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const { shortener } = require('../../src/services');
const { url } = require('../../src/models');
const utilities = require('../../src/utilities');

describe('shortener', () => {
    describe('#generate', () => {
        it('should generate code', async () => {
            const supplierStub = sinon.stub(utilities, 'supply').returns('123456');
            const urlStub = sinon.spy(url, 'create');

            await shortener.generate('http://google.com');

            expect(supplierStub.calledOnce).to.be.true;
            expect(urlStub.calledOnce).to.be.true;
            expect(urlStub.calledWith({
                code: '123456',
                url: 'http://google.com',
            }));
        });
    });
    describe('#get', () => {
        it('should return url', async () => {
            const urlStub = sinon.spy(url, 'findOne');

            shortener.get('123456');

            expect(urlStub.calledOnce).to.be.true;
            expect(urlStub.calledWith({
                code: '123456',
            }));
        });
    });
});
