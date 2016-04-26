#!/usr/bin/env node-debug

/**
 * @file 入口文件
 * @author wenber
 */

var program = require('commander');

program
    .command('init')
    .description('初始化一个react项目')
    .action(function(){
        var init = require('../cli/init');
        init();
    });

program.parse(process.argv);