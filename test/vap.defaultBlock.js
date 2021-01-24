var chai = require('chai');
var assert = chai.assert;
var Vap = require('../packages/web3-vap');

var vap = new Vap();

var setValue = 123;

describe('web3.vap', function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(vap.defaultBlock, 'latest');
            assert.equal(vap.personal.defaultBlock, 'latest');
            assert.equal(vap.Contract.defaultBlock, 'latest');
            assert.equal(vap.getCode.method.defaultBlock, 'latest');
        });
        it('should set defaultBlock for all sub packages is set to proper value, if Vap package is changed', function () {
            vap.defaultBlock = setValue;

            assert.equal(vap.defaultBlock, setValue);
            assert.equal(vap.personal.defaultBlock, setValue);
            assert.equal(vap.Contract.defaultBlock, setValue);
            assert.equal(vap.getCode.method.defaultBlock, setValue);
        });
    });
});

