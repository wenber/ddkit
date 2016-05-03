import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import './style.less';

class Layout extends Component {
    render () {
        return (
            <div>
                <div className="nav">
                    <ul>
                      <li><Link to="/home">Home</Link></li>
                      <li><Link to="/404">404</Link></li>
                      <li><Link to="/500">500</Link></li>
                    </ul>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

module.exports = Layout;
