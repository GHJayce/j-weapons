
require('../../../src/common/string');

test('toUpper', () => {

    const str1 = 'banana';
    expect(str1.toUpper()).toBe('BANANA');


    const str2 = 'BAnana';
    expect(str2.toUpper()).toBe('BANANA');

});