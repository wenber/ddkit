// enable babel
require('babel-core/register')({
    extensions: ['.es6', '.es', '.jsx', '.js'],
    presets: ['es2015', 'react']
});
// require gulp entry
require('./gulp');
