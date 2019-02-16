const path = require('path');

const rootpath = path.resolve(__dirname, '../');

let config = {
    entry: path.resolve(rootpath, 'src', 'index.js'),
    output: {
        filename: 'j-weapons.js',
        path: path.resolve(rootpath, 'dist'),
        library: 'JW',
        libraryTarget: 'umd'
    }
};

module.exports = config;