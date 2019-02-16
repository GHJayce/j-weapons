const webpack = require('webpack');
const path = require('path');
let config = require('./webpack.base.config');

config.output.filename = 'j-weapons.min.js';

config.module = {
    rules: [{
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'babel-loader'
    }]
}

module.exports = config;