var webpack = require("webpack");
var stageConfig = require('./webpack.config.staging');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _ = require('lodash');

// 线上
var relConfig = _.extend(stageConfig, {
    output: {
        path: __dirname + '/release/asset',
        publicPath: '/asset/',
        filename: 'entry.[hash:8].min.js',
        chunkFilename: '[name].chunk.[hash:8].min.js'
    },
    loader: {
        configEnvironment: 'production'
    }
});

module.exports = relConfig;
