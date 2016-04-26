var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var wpConfig = function () {
    return {
        entry: {
            common: ['react', 'antd', 'react-router', 'lodash'],
            entry: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                './src/entryRouter'
            ]
        },
        debug: true,
        devtool: 'cheap-module-inline-source-map',
        output: {
            path: '/',
            publicPath: '/asset/',
            filename: '[name].js',
            chunkFilename: '[name].biz.[hash].js'
        },
        module: {
            loaders: [
                {   test: /\.rt/,
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
                    loaders: ['react-hot', 'babel'],
                },
                {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
                {test: /\.png$/, loader: 'url?mimetype=image/png'},
                {test: /\.jpg/, loader: 'url?mimetype=image/jpg'},
                {test: /\.jpeg/, loader: 'url?mimetype=image/jpeg'}
            ]
        },
        externals: {
            moment: true,
            jquery: true
        },
        loader: {
            configEnvironment: 'development' // <-- Set this to what you want to use
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['common', 'entry'], filename:'common.bundle.js'}),
            new ExtractTextPlugin('[name].css')
        ]
    };
};

module.exports = wpConfig;