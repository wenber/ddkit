/**
 * @file 工具方法
 * @author wenber
 */

var chalk = require('chalk');
var console = require('console');

module.exports = {

    /**
     * 成功日志输出
     * @param  {string} str   字符串日志
     */
    logSuccess: function (str) {
        console.log(chalk.green(str));
    },

    /**
     * 失败日志输出
     * @param  {string} str   字符串日志
     */
    logFail: function (str) {
        console.log(chalk.red(str));
    },

    /**
     * 获取到个人信息
     * @return {Object}
     */
    getPersonInfo: function () {
        var date = new Date();
        return {
            date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
            author: process.env.USER || ''
        }
    }
};
