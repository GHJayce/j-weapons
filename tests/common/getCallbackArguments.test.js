
const {getCallbackArguments} = require('../../src/common/common');

test('getCallbackArguments', () => {

    const fun1 = (a, b) => {};
    expect(getCallbackArguments(fun1)).toEqual(['a', 'b']);


    const fun2 = function (  a,   b) {};
    expect(getCallbackArguments(fun2)).toEqual(['a', 'b']);

});