
const {deepCopy} = require('../../src/common/common');

test('deepCopy', () => {

    let arrOrigin = [1, 2, 3];
    let arr0 = deepCopy(arrOrigin);
    let arr1 = deepCopy(arr0);
    arr0[0] = 0;
    expect(arr1).toEqual(arrOrigin);


    let objOrigin = {
        a: 1,
        b: 2,
        c: 3,
    };
    let obj0 = deepCopy(objOrigin);
    let obj1 = deepCopy(obj0);
    obj0.a = 0;
    expect(obj1).toEqual(objOrigin);

});