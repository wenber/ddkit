import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {hashHistory} from 'react-router';

const rootRoute = {
    component: 'div',
    childRoutes: [
        {
            path: '/',
            component: require('./pages/App'),
            childRoutes: []
        }
    ]
};

render(
  <Router history={hashHistory} children={rootRoute} />,
  document.getElementById('main')
);
