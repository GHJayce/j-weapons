
const {getFirstItem} = require('../../../src/common/object');

test('getFirstItem', () => {

    expect(getFirstItem({})).toBe(undefined);


    expect(getFirstItem({
        a: 1,
        b: 2,
        c: 3,
    })).toEqual({
        a: 1,
    });


    expect(getFirstItem({
        c: 3,
        b: 2,
        a: [1, 2, 3],
    })).toEqual({
        c: 3,
    });

});