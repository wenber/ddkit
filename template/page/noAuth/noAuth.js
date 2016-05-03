/**
 * @file: 存储房源
 * @author：wangshiying@zufangit.cn
 * @date:2015-8-11
 */

import React from 'react';
import Tpl from './template.rt';
import './style.less';
import HouseStore from './store.js';

export default class App extends React.Component {

    componentWillMount() {


    }


    render() {
        return Tpl.apply(this);
    }
}
