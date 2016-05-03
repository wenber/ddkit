import React, { Component } from 'react';
import './style.less';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="react-home"><img src={require("./img/react.jpg")} /></div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}


module.exports = Home;