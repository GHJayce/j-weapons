
require('../../../src/common/string');

test('trimRight', () => {

    const str1 = ' banana ';
    expect(str1.trimRight()).toBe(' banana');


    const str2 = ' dbananad ';
    expect(str2.trimRight(' ,d')).toBe(' dbanana');

});