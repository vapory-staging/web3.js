var chai = require('chai');
var assert = chai.assert;

global.vaporyProvider = {bzz: 'http://givenProvider:8500'};


describe('Web3.providers.givenProvider', function () {
    describe('should be set if vaporyProvider is available ', function () {

        it('when instantiating Web3', function () {

            var Web3 = require('../packages/web3');

            assert.deepEqual(Web3.givenProvider, global.vaporyProvider);

        });

        it('when instantiating Vap', function () {

            var Vap = require('../packages/web3-vap');

            assert.deepEqual(Vap.givenProvider, global.vaporyProvider);

        });

        it('when instantiating Bzz', function () {

            var Bzz = require('../packages/web3-bzz');

            assert.deepEqual(Bzz.givenProvider, global.vaporyProvider.bzz);

        });

    });
});

