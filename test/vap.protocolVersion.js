var testMethod = require('./helpers/test.method.js');

var method = 'getProtocolVersion';
var call = 'vap_protocolVersion';

var tests = [{
    result: '12345',
    formattedResult: '12345',
    call: call
}];


testMethod.runTests('vap', method, tests);
