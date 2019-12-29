
const {toObject} = require('../../src/type/toObject');

test('toObject', () => {

    expect(toObject([
        1,
        2,
    ])).toEqual({
        0: 1,
        1: 2,
    });


    expect(toObject('abc')).toEqual({
        0: 'a',
        1: 'b',
        2: 'c',
    });

});