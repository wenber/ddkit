/**
 * @file 生成guid号.
 * @author wangshiying@zufangit.cn
 */

module.exports = {
    get: function () {
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
