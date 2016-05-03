var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var globalDefinePlugin = new webpack.DefinePlugin({
    __WEBPACK__: true,
    __TEST__: JSON.stringify(JSON.parse(process.env.BUILD_TEST || 'false')),
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || 'false')),
});


var wpConfig = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/App'
    ],
    debug: true,
    devtool: 'cheap-module-inline-source-map',
    output: {
        path: __dirname + '/asset',
        publicPath: '/',
        filename: 'entry.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.rt/,
                loader: 'react-templates'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.jsx$/,
                loader: 'babel!jsx?harmony'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|tool|release|(src\/component\/fileUpload\/webuploader.js)/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        moment: true,
        jquery: true
    },
    loader: {
        configEnvironment: 'development'
    },
    plugins: [
        globalDefinePlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
        new ExtractTextPlugin('[name].css'),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = exports = wpConfig;