
require('../../../src/common/string');

test('insert', () => {

    const str1 = 'banan';
    expect(str1.insert('a', 5)).toBe('banana');


    const str2 = 'bnana';
    expect(str2.insert('a', 1)).toBe('banana');

});