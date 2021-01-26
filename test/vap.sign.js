var testMethod = require('./helpers/test.method.js');
var Vap = require('../packages/web3-vap');

var vap = new Vap();

var method = 'sign';


var tests = [{
    args: ['Hello World!$*', '0xeb014f8c8b418db6b45774c326a0e64c78914dc0'],
    formattedArgs: ['0xeb014f8c8b418db6b45774c326a0e64c78914dc0', '0x48656c6c6f20576f726c6421242a'],
    result: '0x1faed7bfdaef674113ac51ac6be374f66d3206c12b4dba4fdbae09edf8b7b8764978aac602da2a536c71a261d20fd6e283f6ad55811d712efec0d9676d8623f21c',
    formattedResult: '0x1faed7bfdaef674113ac51ac6be374f66d3206c12b4dba4fdbae09edf8b7b8764978aac602da2a536c71a261d20fd6e283f6ad55811d712efec0d9676d8623f21c',
    call: 'vap_'+ method
},{
    useLocalWallet: function (web3) {
        web3.vap.accounts.wallet.add('0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728');
    },
    args: ['Hello World!$*', '0xeb014f8c8b418db6b45774c326a0e64c78914dc0'],
    formattedArgs: ['0xeb014f8c8b418db6b45774c326a0e64c78914dc0', '0x48656c6c6f20576f726c6421242a'],
    result: '0x1faed7bfdaef674113ac51ac6be374f66d3206c12b4dba4fdbae09edf8b7b8764978aac602da2a536c71a261d20fd6e283f6ad55811d712efec0d9676d8623f21c',
    formattedResult: '0x1faed7bfdaef674113ac51ac6be374f66d3206c12b4dba4fdbae09edf8b7b8764978aac602da2a536c71a261d20fd6e283f6ad55811d712efec0d9676d8623f21c',
    call: null
},{
    args: ['Hello Wolrd!$*', '0xeb014f8c8b418db6b45774c326a0e64c78914dc0'],
    formattedArgs: ['0xeb014f8c8b418db6b45774c326a0e64c78914dc0', '0x48656c6c6f20576f6c726421242a'],
    result: '0x1ddd3ea6f9ac5f2ffe051dd63bac3ddd75234e1169be4a0bf50b0a9f3afd413c7ab7068df55b1344bf0e3674febd5d98fcd058dc5d822a8cc4fa86cbbd7c47101b',
    formattedResult: '0x1ddd3ea6f9ac5f2ffe051dd63bac3ddd75234e1169be4a0bf50b0a9f3afd413c7ab7068df55b1344bf0e3674febd5d98fcd058dc5d822a8cc4fa86cbbd7c47101b',
    call: 'vap_'+ method
},{
    useLocalWallet: function (web3) {
        web3.vap.accounts.wallet.add('0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728');
    },
    args: ['Hello Wolrd!$*', '0xeb014f8c8b418db6b45774c326a0e64c78914dc0'],
    formattedArgs: ['0xeb014f8c8b418db6b45774c326a0e64c78914dc0', '0x48656c6c6f20576f6c726421242a'],
    result: '0x1ddd3ea6f9ac5f2ffe051dd63bac3ddd75234e1169be4a0bf50b0a9f3afd413c7ab7068df55b1344bf0e3674febd5d98fcd058dc5d822a8cc4fa86cbbd7c47101b',
    formattedResult: '0x1ddd3ea6f9ac5f2ffe051dd63bac3ddd75234e1169be4a0bf50b0a9f3afd413c7ab7068df55b1344bf0e3674febd5d98fcd058dc5d822a8cc4fa86cbbd7c47101b',
    call: null
}];

testMethod.runTests('vap', method, tests);

