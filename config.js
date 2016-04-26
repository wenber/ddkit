/**
 * @file 配置文件
 * @author wenber
 */
module.exports = {
    directories: [
        'config',
        'debug',
        'gulp',
        'middleware',
        'src'
    ],
    files: [
        'README.md'
    ],
    dependencies: [
        'react',
        'react-router',
        'react-router-limiter',
        'react-templates',
        'react-templates-loader',
        'antd',
        'redux',
        'redux-thunk',
        'react-redux',
        'lodash',
        'store',
        'http-proxy',
        'moment',
        'extract-text-webpack-plugin'
    ],
   devDependencies: [
        'autoprefixer-loader',
        'babel',
        'babel-loader',
        'babel-tape-runner',
        'css-loader',
        'file-loader',
        'gulp',
        'gulp-util',
        'jsx-loader',
        'less',
        'less-loader',
        'mockservice',
        'react-hot-loader',
        'style-loader',
        'url-loader',
        'webpack-config-loader',
        'webpack-dev-middleware',
        'webpack-dev-server'
    ]
};
