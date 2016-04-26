var webpack = require("webpack");
var config = require('./wp.config')();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = "/internal/asset/";
config.output.path = require('path').resolve(__dirname, 'release') + '/asset';
config.output.filename = config.output.filename.replace(/\.js$/, '.[hash].min.js');
// config.entry.entry = './src/entry';
config.entry.entry = './src/router';

config.loader.configEnvironment = 'staging';

config.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].bundle.js'),
    new ExtractTextPlugin('[name].[hash].css')
];

module.exports = config;
