
const {getLastItem} = require('../../../src/common/object');

test('getLastItem', () => {

    expect(getLastItem({})).toBe(undefined);


    expect(getLastItem({
        a: 1,
        b: 2,
        c: 3,
    })).toEqual({
        c: 3,
    });


    expect(getLastItem({
        c: 3,
        b: 2,
        a: [1, 2, 3],
    })).toEqual({
        a: [1, 2, 3],
    });

});