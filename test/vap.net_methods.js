var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');
var Vap = require('../packages/web3-vap');
var vap = new Vap();

describe('web3.net', function() {
    describe('methods', function() {
        u.methodExists(vap.net, 'getId');
        u.methodExists(vap.net, 'getNetworkType');
        u.methodExists(vap.net, 'isListening');
        u.methodExists(vap.net, 'getPeerCount');
    });
});
