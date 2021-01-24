var chai = require('chai');
var assert = chai.assert;

global.web3 = {
    currentProvider: {bzz: 'http://givenProvider:8500'}
};


describe('Web3.providers.givenProvider', function () {
    describe('should be set if web3.currentProvider is available ', function () {

        it('when instantiating Web3', function () {

            var Web3 = require('../packages/web3');

            assert.deepEqual(Web3.givenProvider, global.web3.currentProvider);

        });

        it('when instantiating Vap', function () {

            var Vap = require('../packages/web3-vap');

            assert.deepEqual(Vap.givenProvider, global.web3.currentProvider);

        });
    });
});

