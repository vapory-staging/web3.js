var testMethod = require('./helpers/test.method.js');

var method = 'getGasPrice';
var methodCall = 'vap_gasPrice';

var tests = [{
    result: '0x15f90',
    formattedResult: '90000',
    call: methodCall
}];


testMethod.runTests('vap', method, tests);

