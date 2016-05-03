import React, { Component } from 'react';
import './style.less';

class ServerInternalError extends Component {
    render() {
        return (
          <div className="server500">
                <img src={require("./img/500.png")} />
            </div>
        );
    }
}


module.exports = ServerInternalError;
