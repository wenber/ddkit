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

module.exports = function (name) {
    // 初始项目
    util.logSuccess('添加模块，模块名为：' + name);
    spawn('mkdir', ['src/page/' + name])
        .then(function () {
            copyPlainFile('page/module', 'src/page/' + name);
            util.logSuccess('添加模块 ' + name + ' 完成');
        });
};

/**
 * 直接拷贝文件
 * @param {string} sourceDir 源目录名
 * @param {string} destDir 目的目录名
 */
function copyPlainFile(sourceDir, destDir) {
    destDir = destDir || '';
    filePath = path.resolve(__dirname, '../template/' + sourceDir);
    filesList = fs.readdirSync(filePath);
    var sourcePath = '';
    filesList.forEach(function (item) {
        sourcePath = path.resolve(filePath, item);
        if (fs.existsSync(sourcePath) && fs.statSync(sourcePath).isFile()) {
            cp(sourcePath, process.cwd() + '/' + destDir + '/' + item);
        }
    });
};
