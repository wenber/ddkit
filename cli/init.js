/**
 * @file 初始化一个react项目
 * @author wenber
 */

require('shelljs/global');

var spawn = require('../lib/spawn');
var config = require('../config');
var fs = require('fs');
var path = require('path');
var util = require('../lib/util');

module.exports = function () {
    // 初始项目
    util.logSuccess('初始化项目开始');
    spawn('npm', ['init'])
        // 创建项目目录结构
        .then(function () {
            config.proName = JSON.parse(
                fs.readFileSync(path.resolve(process.cwd(), './package.json'), 'UTF-8')
            ).name;
            return spawn('mkdir', ['-p'].concat(config.directories));
        })
        // 安装项目依赖
        .then(function () {
            util.logSuccess('创建项目目录结构完成');
            return spawn('npm', ['install', '--save'].concat(config.dependencies));
        })
        // 安装环境依赖
        .then(function () {
            util.logSuccess('安装项目依赖完成');
            return spawn('npm', ['install', '--save-dev'].concat(config.devDependencies));
        })
        // 代码巡检脚本等同步任务
        .then(function () {
            util.logSuccess('安装环境依赖完成');
            // 代码巡检脚本
            var content = fs.readFileSync(path.resolve(__dirname, '../template/fecheck.tp'), 'UTF-8');
            content = content.replace('@name@', config.proName);
            fs.writeFileSync(path.resolve(process.cwd(), './fetch'), content, 'UTF-8');
            cp(path.resolve(__dirname, '../template/eslintignore.tp'), process.cwd() + '/.eslintignore');
            cp(path.resolve(__dirname, '../template/gitignore.tp'), process.cwd() + '/.gitignore');
            util.logSuccess('代码巡检脚本初始化完成');
            // 编译脚本
            content = fs.readFileSync(path.resolve(__dirname, '../template/build.tp'), 'UTF-8');
            content = content.replace('@name@', config.proName);
            fs.writeFileSync(path.resolve(process.cwd(), './build.sh'), content, 'UTF-8');
            content = fs.readFileSync(path.resolve(__dirname, '../template/build.tp'), 'UTF-8');
            content = content.replace('@name@', config.proName);
            fs.writeFileSync(path.resolve(process.cwd(), './build.sh'), content, 'UTF-8');
            util.logSuccess('编译脚本初始化完成');
            // webpack配置
            cp(path.resolve(__dirname, '../template/wp.config.tp'), process.cwd() + '/wp.config.js');
            cp(path.resolve(__dirname, '../template/wp.config.release.tp'), process.cwd() + '/wp.config.release.js');
            cp(path.resolve(__dirname, '../template/wp.config.staging.tp'), process.cwd() + '/wp.config.staging.js');
            util.logSuccess('webpack配置初始化完成');
            // react-router
            cp(path.resolve(__dirname, '../template/entryRouter.tp'), process.cwd() + '/src/entryRouter.js');
            cp(path.resolve(__dirname, '../template/App.tp'), process.cwd() + '/src/page/App.js');
            cp(path.resolve(__dirname, '../template/index.html.tp'), process.cwd() + '/index.html');
            util.logSuccess('react-router初始化完成');
            // common公共文件
            cp(path.resolve(__dirname, '../template/common/ajax.tp'), process.cwd() + '/src/common/util/ajax.js');
            cp(path.resolve(__dirname, '../template/common/guid.tp'), process.cwd() + '/src/common/util/guid.js');
            cp(path.resolve(__dirname, '../template/common/url.tp'), process.cwd() + '/src/common/util/url.js');
            util.logSuccess('common公共文件初始化完成');
        });
};