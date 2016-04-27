var webpack = require("webpack");
var config = require('./wp.config')();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 线上
config.output.publicPath = '/asset/';
config.output.filename = config.output.filename.replace(/\.js$/, '.[hash].min.js');
config.output.path = require('path').resolve(__dirname, 'release') + '/asset';
config.entry.entry = './src/router';

config.loader.configEnvironment = 'production';

config.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].bundle.js'),
    new ExtractTextPlugin('[name].[hash].css')
];

module.exports = config;
