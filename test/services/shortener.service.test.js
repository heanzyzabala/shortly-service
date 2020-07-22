/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const codeSupplier = require('../../src/code.supplier');
const urlModel = require('../../src/models/url.model');
const service = require('../../src/services/shortener.service');

describe('shortener', () => {
    describe('#generate', () => {
        it('should generate code', async () => {
            const codeSupplierStub = sinon.stub(codeSupplier, 'get').returns('123456');
            const userModelSpy = sinon.spy(urlModel, 'save');

            await service.generate('http://google.com');

            expect(codeSupplierStub.calledOnce).to.be.true;
            expect(userModelSpy.calledOnce).to.be.true;
            expect(userModelSpy.calledWith({
                code: '123456',
                url: 'http://google.com',
            }));
        });
    });
    describe('#get', () => {
        it('should return url', async () => {
            const urlModelSpy = sinon.spy(urlModel, 'get');

            await service.get('123456');

            expect(urlModelSpy.calledOnce).to.be.true;
            expect(urlModelSpy.calledWith({
                code: '123456',
            }));
        });
    });
});
