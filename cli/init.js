/**
 * @file 初始化一个react项目
 * @author wenber
 */

var spawn = require('../lib/spawn');
var log = require('console');
var config = require('../config');

module.exports = function () {
    // 初始项目
    spawn('npm', ['init'])
        // 创建项目目录结构
        .then(function () {
            return spawn('mkdir', ['-p'].concat(config.directories));
        })
        // 安装项目依赖
        .then(function () {
            return spawn('npm', ['install', '--save'].concat(config.dependencies));
        })
        // 安装环境依赖
        .then(function () {
            return spawn('npm', ['install', '--save-dev'].concat(config.devDependencies));
        });;
};