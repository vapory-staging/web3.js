var chai = require('chai');
var assert = chai.assert;
var Vap = require('../packages/web3-vap');
var vap = new Vap();

var tests = [
    {
        direct: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS',
        address: '0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8' // checksum address
    },
    {
        direct: 'XE1222Q908LN1QBBU6XUQSO1OHWJIOS46OO',
        address: '0x11c5496AEE77c1bA1f0854206a26dDa82A81D6D8'
    },
    {
        direct: 'XE75JRZCTTLBSYEQBGAS7GID8DKR7QY0QA3',
        address: '0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B' // checksum address
    },
    {
        error: true,
        direct: 'XE81ETHXREGGAVOFYORK',
        address: '0xHELLO' // checksum address
    }
];

describe('vap', function () {
    describe('Iban', function () {
        tests.forEach(function (test) {
            it('toAddress() should transform iban to address: ' +  test.address, function () {
                if(test.error) {
                    assert.throws(vap.Iban.toAddress.bind(vap.Iban, test.direct));
                } else {
                    assert.deepEqual(vap.Iban.toAddress(test.direct), test.address);
                }
            });
            it('toIban() should transform address to iban: ' +  test.address, function () {
                if(test.error) {
                    assert.throws(vap.Iban.toIban.bind(vap, test.address));
                } else {
                    assert.deepEqual(vap.Iban.toIban(test.address), test.direct);
                }
            });
        });
    });
});

