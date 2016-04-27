/**
 * @file use for mock data in development
 * @author kangxiaojun@zufangit.cn
 */

var ms = require('mockservice');
var proxyList = require('./../debug/proxyList');


module.exports = function (req, res, next) {
    if (/(MOD|GET|ADD|DEL)/.test(req.url)
        && !proxyList.hasOwnProperty(req.url.slice(1))) {
        var reqUrl = req.url;
        console.log(reqUrl);
        req.query.path = reqUrl.slice(1).replace('.do', '/do');
        req.url = '/request.ajax?path=' + reqUrl.slice(1).replace('.do', '/do');
        ms.config({
            name: 'dingding',
            dir: './debug'
        });
        req.body = req.bodyBuffer;
        ms.serve(req, res);
    }

    next();
};
