import React from 'react';
import Tpl from './template.rt';
import './style.less';
import ModuleStore from './store.js';

export default class App extends React.Component {

    componentWillMount() {


    }


    render() {
        return Tpl.apply(this);
    }
}
