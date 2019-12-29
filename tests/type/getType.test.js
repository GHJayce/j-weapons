
const {getType} = require('../../src/type/getType');

test('getType', () => {

    expect(getType('banana')).toBe('string');
    expect(getType(1)).toBe('number');
    expect(getType(1.1)).toBe('number');
    expect(getType(NaN)).toBe('number');
    expect(getType([])).toBe('array');
    expect(getType({})).toBe('object');
    expect(getType(true)).toBe('boolean');
    expect(getType(() => {})).toBe('function');
    expect(getType(null)).toBe('null');
    expect(getType(undefined)).toBe('undefined');

});