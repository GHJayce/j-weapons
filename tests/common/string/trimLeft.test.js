
require('../../../src/common/string');

test('trimLeft', () => {

    const str1 = ' banana ';
    expect(str1.trimLeft()).toBe('banana ');


    const str2 = ' dbananad ';
    expect(str2.trimLeft(' ,d')).toBe('bananad ');

});