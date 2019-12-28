let moduleExports = {};

const version = '1.0';
const commonDir = 'common';
const r = require.context('./', true, /^\.\/.+\/.+\.js$/);

const objectToValuesPolyfill = (object) => {
    return Object.keys(object).map(key => object[key]);
};
Object.values = Object.values || objectToValuesPolyfill;

r.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    if (key.indexOf(commonDir) !== -1) {
        moduleExports = Object.assign(moduleExports, r(key));
    } else {
        moduleExports[attr] = r(key);
    }
});

for (let i in moduleExports) {
    window[i] = moduleExports[i];
}

moduleExports.version = () => {
    return version;
};

module.exports = moduleExports;