var testMethod = require('./helpers/test.method.js');

var method = 'getHashrate';


var tests = [{
    result: '0x788a8',
    formattedResult: 493736,
    call: 'vap_hashrate'
}];


testMethod.runTests('vap', method, tests);

