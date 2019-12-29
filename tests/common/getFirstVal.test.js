
const {getFirstVal} = require('../../src/common/common');

test('getFirstVal', () => {

    expect(getFirstVal('123')).toBe('1');


    expect(getFirstVal([1, 2, 3])).toBe(1);


    expect(getFirstVal([
        {
            a: 1,
        },
        2,
        3
    ])).toEqual({
        a: 1,
    });


    expect(getFirstVal({
        a: 1,
        b: 2,
        c: 3,
    })).toBe(1);


    expect(getFirstVal({
        a: [1, 2, 3],
        b: 2,
        c: 3,
    })).toEqual([1, 2, 3]);


    expect(getFirstVal({
        a: {
            aa: 1,
            bb: 2,
        },
        b: 2,
        c: 3,
    })).toEqual({
        aa: 1,
        bb: 2,
    });

});