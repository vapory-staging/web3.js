var testMethod = require('./helpers/test.method.js');

var method = 'getCompilers';


var tests = [{
    args: [],
    formattedArgs: [],
    result: ['solidity'],
    formattedResult: ['solidity'],
    call: 'vap_'+ method
},{
    args: [],
    formattedArgs: [],
    result: ['solidity'],
    formattedResult: ['solidity'],
    call: 'vap_'+ method
}];

testMethod.runTests('vap', method, tests);

