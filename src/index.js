
let JW = {};

const commonDir = 'common';
const r = require.context('./', true, /^\.\/.+\/.+\.js$/);

const objectToValuesPolyfill = (object) => {
    return Object.keys(object).map(key => object[key]);
};
Object.values = Object.values || objectToValuesPolyfill;

r.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    if (key.indexOf(commonDir) !== -1) {
        JW = Object.assign(JW, r(key));
    } else {
        JW[attr] = r(key)[attr];
    }
});

JW.exposesToGlobal = () => {
    const except = ['version'];

    for (let i in JW) {
        if (
            JW.isSet(window)
            && !JW.has(except, i)
        ) {
            window[i] = JW[i];
        }
    }
};

JW.version = '1.4.1';

module.exports = JW;