/**
 * @file 配置文件
 * @author wenber
 */
module.exports = {
    // 项目的名称，和package.json中的name字段值保持一致
    proName: '',
    directories: [
        'config',
        'debug',
        'gulp/util',
        'middleware',
        'src/resource/style',
        'src/common',
        'src/page',
        'src/resource/img'
    ],
    files: [
        'README.md'
    ],
    dependencies: [
        'react@15.0.1',
        'react-router@2.3.0',
        'react-router-limiter@1.0.8',
        'react-templates@0.4.3',
        'react-templates-loader@0.4.0',
        'html-webpack-plugin@2.16.0',
        'antd@0.12.15',
        'redux@3.5.2',
        'react-dom@15.0.1',
        'redux-thunk@2.0.1',
        'react-redux@4.4.5',
        'lodash',
        'store',
        'http-proxy',
        'moment',
        'extract-text-webpack-plugin'
    ],
   devDependencies: [
        'postcss-loader',
        'babel',
        'babel-loader',
        'babel-cli',
        'babel-core',
        'babel-tape-runner',
        'babel-register',
        'babel-preset-stage-0',
        'babel-preset-react',
        'babel-preset-es2015',
        'css-loader',
        'file-loader',
        'jsx-loader',
        'less',
        'less-loader',
        'mockservice',
        'react-hot-loader',
        'style-loader',
        'url-loader',
        'webpack',
        'webpack-config-loader',
        'webpack-dev-middleware',
        'webpack-dev-server',
        'eslint',
        'eslint-plugin-react',
        'eslint-config-airbnb',
        'eslint-plugin-import',
        'eslint-plugin-jsx-a11y'
    ],
    scripts: {
        start: 'node ./devServer.js',
        deploy: 'npm run clean && webpack --config webpack.config.release.js',
        stage: 'npm run clean && webpack --config webpack.config.stage.js',
        clean: 'rm -rf ./release rm -rf ./asset'
    }
};
