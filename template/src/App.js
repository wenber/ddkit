import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router';
import {Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './page/layout/index';
import Home from './page/home/index';

const routes = {
    path: '/',
    component: Layout,
    indexRoute: {component: Home},
    childRoutes: [
        {
            path: '/home',
            getComponent: function(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('./page/home/index'));
                });
            },
            childRoutes: [
                {
                    path: '/home/test',
                    getComponent: function(location, callback) {
                        require.ensure([], function(require) {
                            callback(null, require('./page/home/test/index'));
                        }, 'home-test');
                    }
                }]
        },
        {
            path: '404',
            getComponent: function(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('./page/404/index'));
                }, '404');
            }
        },
        {
            path: '500',
            getComponent: function(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('./page/500/index'));
                }, '500');
            }
        }
    ]
};

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('main')
);
