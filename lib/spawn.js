/**
 * @file spawn命令封装，保证子进程的顺序执行
 * @author wenber
 */

var spawn = require('child_process').spawn;
var _ = require('lodash');
var Promise = require('promise');
var log = require('console');

module.exports = function (command, args, options) {
    options = options || {};
    // windows
    if (process.platform === 'win32') {
        args = ['/c'].concat(command, args);
        command = process.env.comspec;
    }

    // 持有子进程的引用
    var pro = spawn(
        command,
        args,
        _.extend({
            stdio: [0, 1, 2],
            cwd: process.cwd(),
            env: process.env
        }, options)
    );

    return new Promise(function (resolve, reject) {
        pro.on('close', function (code) {
            if (code !== 0) {
                log.error('ddkit process exited with code:' + code);
                reject();
            }
            resolve();
        });
    });
};
