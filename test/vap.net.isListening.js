var testMethod = require('./helpers/test.method.js');

var method = 'isListening';


var tests = [{
    result: true,
    formattedResult: true,
    call: 'net_listening'
}];

testMethod.runTests(['vap','net'], method, tests);
