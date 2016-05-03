import React, {Component} from 'react';
import './style.less';

class NotFund extends Component {

    render() {
        return (
            <div className="browser404" >
                <img src={require("./img/404.gif")} />
            </div>
        );
    }
}

module.exports = NotFund;
