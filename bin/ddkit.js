#!/usr/bin/env node

/**
 * @file 入口文件
 * @author wenber
 */

var program = require('commander');

program
    .version('0.0.1')

program
    .command('init')
    .description('初始化一个react项目')
    .action(function(){
        var init = require('../cli/init');
        init();
    });

program
    .command('add')
    .option('-r, --react <moduleName>', 'Add react模块')
    .option('-x, --redux <moduleName>', 'Add redux模块')
    .description('新增一个react模块（-r）or 新增一个react模块(-x)')
    .action(function(){
        var add = require('../cli/add');
        if (this.react) {
            add(this.react, 'react');
        }
        else if (this.redux) {
            add(this.redux, 'redux');
        }
        else {
            console.log('当前命令无效');
        }
    });


program.parse(process.argv);