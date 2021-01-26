var testMethod = require('./helpers/test.method.js');

var method = 'isMining';
var call = 'vap_mining';

var tests = [{
    result: true,
    formattedResult: true,
    call: call
}];


testMethod.runTests('vap', method, tests);
