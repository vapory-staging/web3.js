var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');

var Vap = require('../packages/web3-vap');
var vap = new Vap();

describe('vap', function() {
    describe('methods', function() {
        u.methodExists(vap, 'getBalance');
        u.methodExists(vap, 'getStorageAt');
        u.methodExists(vap, 'getTransactionCount');
        u.methodExists(vap, 'getCode');
        u.methodExists(vap, 'isSyncing');
        u.methodExists(vap, 'sendTransaction');
        u.methodExists(vap, 'call');
        u.methodExists(vap, 'getBlock');
        u.methodExists(vap, 'getTransaction');
        u.methodExists(vap, 'getUncle');
        u.methodExists(vap, 'getCompilers');
        u.methodExists(vap.compile, 'lll');
        u.methodExists(vap.compile, 'solidity');
        u.methodExists(vap.compile, 'serpent');
        u.methodExists(vap, 'getBlockTransactionCount');
        u.methodExists(vap, 'getBlockUncleCount');
        u.methodExists(vap, 'subscribe');
        u.methodExists(vap, 'Contract');
        u.methodExists(vap, 'Iban');


        u.methodExists(vap, 'isMining');
        u.methodExists(vap, 'getCoinbase');
        u.methodExists(vap, 'getGasPrice');
        u.methodExists(vap, 'getHashrate');
        u.methodExists(vap, 'getAccounts');
        u.methodExists(vap, 'getBlockNumber');

        u.methodExists(vap, 'getProtocolVersion');

        u.methodExists(vap, 'setProvider');
        u.propertyExists(vap, 'givenProvider');
        u.propertyExists(vap, 'defaultBlock');
        u.propertyExists(vap, 'defaultAccount');

        u.propertyExists(vap, 'net');
        u.methodExists(vap.net, 'getId');
        u.methodExists(vap.net, 'isListening');
        u.methodExists(vap.net, 'getPeerCount');

        u.propertyExists(vap, 'personal');
        u.methodExists(vap.personal, 'sendTransaction');
        u.methodExists(vap.personal, 'newAccount');
        u.methodExists(vap.personal, 'unlockAccount');
    });
});

