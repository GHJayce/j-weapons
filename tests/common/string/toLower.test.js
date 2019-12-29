
require('../../../src/common/string');

test('toLower', () => {

    const str1 = 'BANANA';
    expect(str1.toLower()).toBe('banana');


    const str2 = 'BAnana';
    expect(str2.toLower()).toBe('banana');

});