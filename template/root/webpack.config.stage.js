var webpack = require("webpack");
var devConfig = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _ = require('lodash');

// 测试环境
var relConfig = _.extend(devConfig, {
    entry: './src/App',
    output: {
        path: __dirname + '/release/asset',
        publicPath: '/internal/asset/',
        filename: 'entry.[hash:8].min.js',
        chunkFilename: '[name].chunk.[hash:8].min.js'
    },
    loader: {
        configEnvironment: 'staging'
    },
    debug: false,
    devtool: '',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['module', '$', 'exports', 'require']
            },
            output: {
                comments: false,
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.bundle.[hash:8].min.js'),
        new ExtractTextPlugin('[name].[hash:8].min.css'),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
});

module.exports = relConfig;

