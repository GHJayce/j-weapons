
import {isEmpty} from '../../src/type/isEmpty';

test('isEmpty', () => {
    let obj = {}

    expect(isEmpty(null)).toBe(true)
    expect(isEmpty('null')).toBe(true)
    expect(isEmpty('null', 1)).toBe(false)

    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('undefined')).toBe(true)
    expect(isEmpty('undefined', 1)).toBe(false)

    expect(isEmpty(0)).toBe(true)
    expect(isEmpty('0')).toBe(true)
    expect(isEmpty('0', 1)).toBe(false)

    expect(isEmpty(false)).toBe(true)
    expect(isEmpty('false')).toBe(true)
    expect(isEmpty('false', 1)).toBe(false)

    expect(isEmpty(NaN)).toBe(true)
    expect(isEmpty('NaN')).toBe(true)
    expect(isEmpty('NaN', 1)).toBe(false)

    expect(isEmpty([])).toBe(true)
    expect(isEmpty([0])).toBe(false)

    expect(isEmpty({})).toBe(true)
    expect(isEmpty(obj.a)).toBe(true)
    expect(isEmpty({a: 1})).toBe(false)

    expect(isEmpty('a')).toBe(false)

    expect(isEmpty(true)).toBe(false)
})