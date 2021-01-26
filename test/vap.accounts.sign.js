var Accounts = require("./../packages/web3-vap-accounts");
var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../packages/web3');
var web3 = new Web3();

var tests = [
    {
        address: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        privateKey: '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728',
        data: 'Some data',
        // signature done with personal_sign
        signature: '0x9946419a3436ec333db03d0e3827c614ff698badb84777f9731a3a1cd42191c26f57016b3e276b6ae778e26f67c1aff46af2684c3d73ae02c9a27e788f34d62e1c'
    }, {
        address: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        privateKey: '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728',
        data: 'Some data!%$$%&@*',
        // signature done with personal_sign
        signature: '0x5a235ce20eb66956fa139cb2e77b9ffcab491fa748b85d758437a1fc2edffdab4724d38a9fe9c342ee3cedff4b02ef4b94059de8e6ffea1b89957b646f840d381b'
    }
];


describe("vap", function () {
    describe("accounts", function () {

        tests.forEach(function (test, i) {
            it("sign data using a string", function() {
                var vapAccounts = new Accounts();

                var data = vapAccounts.sign(test.data, test.privateKey);

                assert.equal(data.signature, test.signature);
            });

            it("sign data using a utf8 encoded hex string", function() {
                var vapAccounts = new Accounts();

                var data = vapAccounts.sign(web3.utils.utf8ToHex(test.data), test.privateKey);

                assert.equal(data.signature, test.signature);
            });


            it("recover signature using a string", function() {
                var vapAccounts = new Accounts();

                var address = vapAccounts.recover(test.data, test.signature);

                assert.equal(address, test.address);
            });

            it("recover signature using a hashed message", function() {
                var vapAccounts = new Accounts();

                var address = vapAccounts.recover(vapAccounts.hashMessage(test.data), test.signature);

                assert.equal(address, test.address);
            });

            it("recover signature (pre encoded) using a signature object", function() {
                var vapAccounts = new Accounts();

                var sig = vapAccounts.sign(web3.utils.utf8ToHex(test.data), test.privateKey);
                var address = vapAccounts.recover(sig);

                assert.equal(address, test.address);
            });

            it("recover signature using a signature object", function() {
                var vapAccounts = new Accounts();

                var sig = vapAccounts.sign(test.data, test.privateKey);
                var address = vapAccounts.recover(sig);

                assert.equal(address, test.address);
            });

            it("recover signature (pre encoded) using a hash and r s v values", function() {
                var vapAccounts = new Accounts();

                var sig = vapAccounts.sign(web3.utils.utf8ToHex(test.data), test.privateKey);
                var address = vapAccounts.recover(test.data, sig.v, sig.r, sig.s);

                assert.equal(address, test.address);
            });

            it("recover signature using a hash and r s v values", function() {
                var vapAccounts = new Accounts();

                var sig = vapAccounts.sign(test.data, test.privateKey);
                var address = vapAccounts.recover(test.data, sig.v, sig.r, sig.s);

                assert.equal(address, test.address);
            });
        });
    });
});
