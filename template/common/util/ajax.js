/**
 * @ajax封装
 * @author Shiying Wang(wangshiying@baidu.com)
 */

// TODO: IMPORT 不好用，why？？？
// import Guid from './guid.js';
// import Code from './../context/codeConfig.js'

import Context from './../context/init';
// import appConfig from 'webpack-config-loader!../../../config/app-config.js';

module.exports = {
    send: function (url, param, base) {

        var baseParam = {};

        if(base && !$.isEmptyObject(base)){
            baseParam = base;
        }else {
            baseParam = JSON.parse($.ajaxSettings.data.base);
        }

        // var baseParam = JSON.parse($.ajaxSettings.data.base);
        // baseParam.uuid = Guid.get();
        baseParam.uuid = this.getGuid();
        baseParam.timestamp = (new Date()).getTime();
        // /baseParam.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmUiOjE2NDA0MTMyNDh9.suK2YIOfiJ1EiqeIo-nnuMAHOjlfs_DDQGTRaMOtFLE";

        // 测试专用
        // TODO防止线上环境丢失accoutType的情况
        baseParam.accountType = 1;
        var data = {
            param: JSON.stringify(param || {}),
            base: JSON.stringify(baseParam || {})
        }

        var dtd = $.Deferred();

        $.post(url, data).then(
            function (res) {
                var oldToken = Store.get('dingding400Token_fc_csl_xx');

                // 如果token 改变，更新token
                if (res.token && res.token !== oldToken) {
                    var userInfo = Store.get('dingding400UserInfo' + oldToken);

                    Store.set('dingding400Token_fc_csl_xx', res.token);
                    Store.set('dingding400UserInfo' + res.token, userInfo);

                    Store.remove('dingding400UserInfo' + oldToken);

                    var baseParam = JSON.parse($.ajaxSettings.data.base) || {};
                    baseParam.token = res.token;

                    $.ajaxSettings.data.base = JSON.stringify(baseParam || {})
                }

                // 通用设置
                // 如果token 失效 ;
                // if (res.code === Code.TOKEN_ILLEGAL) {
                if (res.code === 100016) {
                    Store.set('dingding400Token_fc_csl_xx', '');
                    Store.remove('dingding400UserInfo' + oldToken);
                    Store.clear();
                    dtd.reject(res);

                    // 跳转到登陆
                    
                    $('body').trigger('unLogin');

                    // var loginPath = appConfig.path;
                    // window.location.href = loginPath;

                }
                else {
                    dtd.resolve(res);
                }
            },
            function (res) {
                alert('通用错误处理');
                dtd.reject(res);
            }
        );

        return dtd;
    },
    ajaxSetup: function () {
        var token = Store.get('dingding400Token_fc_csl_xx');
        var userInfo = Store.get('dingding400UserInfo' + token);
        
        $.ajaxSetup({
            data: {
                param: JSON.stringify({}),
                base: JSON.stringify({
                    'accountId': userInfo && userInfo.accountId || '',
                    'accountType': 1, //内部系统accoutType默认传1 //userInfo && userInfo.accountType || '',
                    'account': userInfo && userInfo.account || '',
                    'token': token || '',
                    'from': 3, //1-web-业务基础平台，2-web-代理商平台 3：web-400平台 4：web-官网 5-ios-客端，  6:andorid-助手, 7:android-客端 8-M站,9-微信
                    'uuid': '', //请求唯一标识,打md5    必填
                    'baseCityId': -1, //城市id  切换的城市id 管理系统没有传-1  必填
                    'timestamp': '' //时间戳 必填
                    // todo: 世博确定是否区分system
                })
            },
            dataType: 'json',
            timeout: 30000
        });
    },

    getGuid: function () {
        var me = this;
        var curr = (new Date()).valueOf().toString();
        return [
            '4b534c46',  // Fixed first group.
            me.rand16Num(4),
                '4' + me.rand16Num(3),  // The first character of 3rd group is '4'.
            me.rand16Num(4),
            curr.substring(0, 12)].join('-');
    },

    /**
     * 随机生成长度为len的guid
     * @param {number} len
     * @return {string}
     */
    rand16Num: function (len) {
        len = len || 0;
        var result = [];
        for (var i = 0; i < len; i++) {
            result.push('0123456789abcdef'.charAt(
                    Math.floor(Math.random() * 16))
            );
        }
        return result.join('');
    }
}
