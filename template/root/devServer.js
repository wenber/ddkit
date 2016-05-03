var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    contentBase: '/',
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    watchOption: {
        aggregateTimeout: 300, // 延迟rebuild
        poll: true
    },
    stats: {
        colors: true
    },
    historyApiFallback: true,
    hot: true
});

fs.readdirSync('./middleware').forEach((file) => {
    var _middleware = require('./middleware/' + file);
    server.use(_middleware);
});

server.listen(8080, 'localhost', function () {
    console.log('Webpack-Dev-Server: started on port 8080');
});
