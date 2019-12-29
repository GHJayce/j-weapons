
const {typeofStr} = require('../../src/type/typeofStr');

test('typeofStr', () => {

    expect(typeofStr('banana')).toBe('[object String]');
    expect(typeofStr(1)).toBe('[object Number]');
    expect(typeofStr(1.1)).toBe('[object Number]');
    expect(typeofStr(NaN)).toBe('[object Number]');
    expect(typeofStr([])).toBe('[object Array]');
    expect(typeofStr({})).toBe('[object Object]');
    expect(typeofStr(true)).toBe('[object Boolean]');
    expect(typeofStr(() => {})).toBe('[object Function]');
    expect(typeofStr(null)).toBe('[object Null]');
    expect(typeofStr(undefined)).toBe('[object Undefined]');

});