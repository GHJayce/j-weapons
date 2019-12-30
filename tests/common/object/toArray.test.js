
const {toArray} = require('../../../src/common/object');

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