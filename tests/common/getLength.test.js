
const {getLength} = require('../../src/common/common');

test('getLength', () => {

    expect(getLength('banana')).toBe(6);

    expect(getLength([
        'a',
        'b',
        'c',
    ])).toBe(3);

    expect(getLength({
        a: 1,
        b: 2,
        c: 3,
    })).toBe(3);

});