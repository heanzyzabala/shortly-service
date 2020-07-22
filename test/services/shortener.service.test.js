/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const codeSupplier = require('../../src/config/code.supplier');
const urlModel = require('../../src/config/url.model');
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
});
