
require('../../../src/common/string');

test('trim', () => {

    const str1 = ' banana ';
    expect(str1.trim()).toBe('banana');


    const str2 = ' dbananad ';
    expect(str2.trim(' ,d')).toBe('banana');

});