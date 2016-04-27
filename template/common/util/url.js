/**
 * @file init
 * @author Shiying wang (wangshiying@baidu.com)
 */

module.exports = {

    /**
     * 查询url query中的每个key的值
     * @param {string} item 要查询的key
     * @return {string} value
     */
    query: function (item) {
        var search = location.hash.split('?');
        var queryStr = '';
        if (search && search.length === 2) {
            queryStr = search[1];
        }
        if (search[0] === '?') {
            search = search.slice(1);
        }

        var queryArr = queryStr.split('&');

        if (!item) {
            return '';
        }
        for (var i = 0, len = queryArr.length; i < len; i++) {
            var queryItem = queryArr[i].split('=');
            if (queryItem[0] === item) {
                return queryItem[1];
            }
        }
        return ''
    },
    getQuerys: function () {
        var search = location.hash.split('?');
        var queryStr = '';
        if (search && search.length === 2) {
            queryStr = search[1];
        }
        if (search[0] === '?') {
            search = search.slice(1);
        }

        var queryArr = queryStr.split('&');
        var query = {};
        for (var i = 0, len = queryArr.length; i < len; i++) {
            var queryItem = queryArr[i].split('=');
            query[queryItem[0]] = queryItem[1];
        }
        return query;
    }
}
