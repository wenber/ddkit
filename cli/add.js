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
    util.logSuccess('添加模块开始，模块名为：' + name);
    var currDir = process.cwd();
    // 命令没有在根目录运行,则向上查找，直到找到package.json
    while (!fs.existsSync(currDir + '/package.json')) {
        currDir = path.resolve(currDir, '../');
    }

    // 不允许添加重名的模块
    if (fs.existsSync(currDir + '/src/page/' + name)) {
        util.logFail('已经存在名为：' + name + '的模块，请重新命名模块');
        return false;
    }

    spawn('mkdir', [currDir + '/src/page/' + name])
        .then(function () {
            copyPlainFile('module/' + type, currDir + '/src/page/' + name);
            addInfo2Index(currDir + '/src/page/' + name + '/index.js');
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
    cp('-r', sourceDir + '/', destDir + '/');
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