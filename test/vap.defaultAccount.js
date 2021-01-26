var chai = require('chai');
var assert = chai.assert;
var Vap = require('../packages/web3-vap');
var Web3 = require('../packages/web3');

var vap = new Vap();

var setValue = '0x47D33b27Bb249a2DBab4C0612BF9CaF4C1950855';

describe('web3.vap', function () {
    describe('defaultAccount', function () {
        it('should check if defaultAccount is set to proper value', function () {
            assert.equal(vap.defaultAccount, null);
            assert.equal(vap.personal.defaultAccount, null);
            assert.equal(vap.Contract.defaultAccount, null);
            assert.equal(vap.getCode.method.defaultAccount, null);
        });
        it('should set defaultAccount for all sub packages is set to proper value, if Vap package is changed', function () {
            vap.defaultAccount = setValue;

            assert.equal(vap.defaultAccount, setValue);
            assert.equal(vap.personal.defaultAccount, setValue);
            assert.equal(vap.Contract.defaultAccount, setValue);
            assert.equal(vap.getCode.method.defaultAccount, setValue);
        });
        it('should fail if address is invalid, wich is to be set to defaultAccount', function () {

            assert.throws(function(){ vap.defaultAccount = '0x17F33b27Bb249a2DBab4C0612BF9CaF4C1950855'; });

        });
        it('should have different values for two Vap instances', function () {

            var eth1 = new Vap();
            eth1.defaultAccount = setValue;
            assert.equal(eth1.defaultAccount, setValue);

            var eth2 = new Vap();
            assert.equal(eth2.defaultAccount, null);

        });
        it('should have different values for two Web3 instances', function () {

            var web31 = new Web3();
            web31.vap.defaultAccount = setValue;
            assert.equal(web31.vap.defaultAccount, setValue);

            var web32 = new Web3();
            assert.equal(web32.vap.defaultAccount, null);

        });
    });
});

