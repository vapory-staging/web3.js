var chai = require('chai');
var utils = require('../packages/web3-utils');

var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toWei', function () {
        it('should return the correct value', function () {

            assert.equal(utils.toWei('1', 'wei'),    '1');
            assert.equal(utils.toWei('1', 'kwei'),   '1000');
            assert.equal(utils.toWei('1', 'Kwei'),   '1000');
            assert.equal(utils.toWei('1', 'babbage'),   '1000');
            assert.equal(utils.toWei('1', 'mwei'),   '1000000');
            assert.equal(utils.toWei('1', 'Mwei'),   '1000000');
            assert.equal(utils.toWei('1', 'lovelace'),   '1000000');
            assert.equal(utils.toWei('1', 'gwei'),   '1000000000');
            assert.equal(utils.toWei('1', 'Gwei'),   '1000000000');
            assert.equal(utils.toWei('1', 'shannon'),   '1000000000');
            assert.equal(utils.toWei('1', 'szabo'),  '1000000000000');
            assert.equal(utils.toWei('1', 'finney'), '1000000000000000');
            assert.equal(utils.toWei('1', 'vapor'),  '1000000000000000000');
            assert.equal(utils.toWei('1', 'kvapor'), '1000000000000000000000');
            assert.equal(utils.toWei('1', 'grand'),  '1000000000000000000000');
            assert.equal(utils.toWei('1', 'mvapor'), '1000000000000000000000000');
            assert.equal(utils.toWei('1', 'gvapor'), '1000000000000000000000000000');
            assert.equal(utils.toWei('1', 'tvapor'), '1000000000000000000000000000000');

            assert.equal(utils.toWei('1', 'kwei'),    utils.toWei('1', 'femtovapor'));
            assert.equal(utils.toWei('1', 'szabo'),   utils.toWei('1', 'microvapor'));
            assert.equal(utils.toWei('1', 'finney'),  utils.toWei('1', 'millivapor'));
            assert.equal(utils.toWei('1', 'milli'),    utils.toWei('1', 'millivapor'));
            assert.equal(utils.toWei('1', 'milli'),    utils.toWei('1000', 'micro'));

            assert.throws(function () {utils.toWei(1, 'wei1');}, Error);
        });
    });
});
