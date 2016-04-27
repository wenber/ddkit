/**
 * @file 将特定请求指向代理
 * @author wangshiying@zufangit.cn
 */

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var proxyList = require('./../debug/proxyList');


module.exports = function (req, res, next) {
    if (/(MOD|GET|ADD|DEL)/.test(req.url)) {
        proxy.web(req, res, {target: 'http://10.14.24.41'});
    }
    else {
        next();
    }
};
