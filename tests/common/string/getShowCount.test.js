
require('../../../src/common/string');

test('getShowCount', () => {

    const str1 = 'banana';
    expect(str1.getShowCount('c')).toBe(0);
    expect(str1.getShowCount('n')).toBe(2);


    const str2 = 'apple';
    expect(str2.getShowCount('a')).toBe(1);

});