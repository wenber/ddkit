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
        // 代码巡检脚本
        .then(function () {
            util.logSuccess('安装环境依赖完成');
            var content = fs.readFileSync(path.resolve(__dirname, '../template/fecheck.tp'), 'UTF-8');
            content = content.replace('@name@', config.proName);
            fs.writeFileSync(path.resolve(process.cwd(), './fetch'), content, 'UTF-8');
            util.logSuccess('代码巡检脚本初始化完成');
        });
};