
const {getLastKey} = require('../../../src/common/object');

test('getLastKey', () => {

    expect(getLastKey({})).toBe(undefined);


    expect(getLastKey({
        a: 1,
        b: 2,
        c: 3,
    })).toBe('c');


    expect(getLastKey({
        c: 3,
        b: 2,
        a: [1, 2, 3],
    })).toBe('a');

});