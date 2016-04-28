#!/usr/bin/env node

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

program
    .command('add')
    .description('添加模块')
    .action(function(name){
        var add = require('../cli/add');
        add(name);
    });

program.parse(process.argv);