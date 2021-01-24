var Accounts = require("./../packages/web3-vap-accounts");
var vaporyWallet = require('vaporyjs-wallet');
var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../packages/web3');
var web3 = new Web3();

var tests = [];
for (var i = 0; i < 1000; i++) {
    tests.push(i);
}


describe("vap", function () {
    describe("accounts", function () {

        tests.forEach(function (test, i) {
            it("create vap.account, and compare to vaporyjs-wallet", function() {
                var vapAccounts = new Accounts();

                // create account
                var acc = vapAccounts.create();

                // create vaporyjs-wallet account
                var vapWall = vaporyWallet.fromPrivateKey(new Buffer(acc.privateKey.replace('0x',''),'hex'));

                // compare addresses
                assert.equal(acc.address, vapWall.getChecksumAddressString());
            });

        });
    });
});
