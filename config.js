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
        'src/component',
        'src/common/util',
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
        'autoprefixer-loader',
        'babel',
        'babel-loader',
        'babel-tape-runner',
        'babel-register',
        'babel-preset-stage-3',
        'babel-cli',
        'babel-core',
        'babel-preset-es2015',
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
        'webpack',
        'webpack-config-loader',
        'webpack-dev-middleware',
        'webpack-dev-server',
        'eslint',
        'eslint-plugin-react'
    ],
    eslintConfig: {
        rules: {
            semi: [2, 'always'],
            quotes: [2, 'single'],
            'react/jsx-boolean-value': 1,
            eqeqeq: 2,
            strict: 2,
            'no-console': 1,
            'no-alert': 1,
            'max-len': [0, 120]
        },
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
                arrowFunctions: true,
                destructuring: true,
                classes: true,  
                defaultParams: true,
                blockBindings: true,
                modules: true
            }
        },
        env: {
            browser: true,
            node: true
        },
        plugins: [
            'react'
        ],
        globals: {
            define: true,
            Ajax: true
        }
    },
    scripts: {
        start: 'node_modules/.bin/gulp',
        deploy: 'npm run clean && node_modules/.bin/gulp deploy',
        stage: 'npm run clean && NODE_ENV=staging node_modules/.bin/gulp stage',
        clean: 'rm -rf release && mkdir ./release',
        releaseStart: 'node ./service.js --release'
    }
};
