/**
 * @file 新增一个模块
 * @author wenber
 */

require('shelljs/global');

var spawn = require('../lib/spawn');
var config = require('../config');
var fs = require('fs');
var path = require('path');
var util = require('../lib/util');

module.exports = function (name, type) {
    util.logSuccess('添加模块，模块名为：' + name);
    spawn('mkdir', ['src/page/' + name])
        .then(function () {
            copyPlainFile('module/' + type, 'src/page/' + name);
            addInfo2Index(process.cwd() + '/src/page/' + name + '/index.js');
            util.logSuccess('添加模块 ' + name + ' 完成');
        });
};


/**
 * 直接拷贝文件
 * @param {string} sourceDir 源目录名
 * @param {string} destDir 目的目录名
 */
function copyPlainFile(sourceDir, destDir) {
    sourceDir = path.resolve(__dirname, '../template/' + sourceDir);
    cp('-r', sourceDir + '/', process.cwd() + '/' + destDir + '/');
};


/**
 * 处理作者信息
 */
function addInfo2Index(filePath) {
    var info = util.getPersonInfo();
    var content = fs.readFileSync(filePath, 'UTF-8');
    content = content.replace(/\$\{\#author\#\}/, info.author);
    content = content.replace(/\$\{\#date\#\}/, info.date);
    fs.writeFileSync(filePath, content, 'UTF-8');
}