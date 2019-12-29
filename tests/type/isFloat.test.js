
const {isFloat} = require('../../src/type/isFloat');

test('isFloat', () => {

    expect(isFloat('banana')).toBe(false);
    expect(isFloat(1)).toBe(false);
    expect(isFloat(1.1)).toBe(true);
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat([])).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat(true)).toBe(false);
    expect(isFloat(() => {})).toBe(false);
    expect(isFloat(null)).toBe(false);
    expect(isFloat(undefined)).toBe(false);

});