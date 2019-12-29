
const {toArray} = require('../../src/type/toArray');

test('toArray', () => {

    expect(toArray({
        a: 1,
        b: 2,
    })).toEqual([1, 2]);


    expect(toArray({
        a: 1,
        b: 2,
    }, 2)).toEqual([{
        a: 1,
        b: 2,
    }]);

});