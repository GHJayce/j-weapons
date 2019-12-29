
require('../../../src/common/string');

test('indexReplace', () => {

    const str1 = 'banena';
    expect(str1.indexReplace('a', 3)).toBe('banana');

});