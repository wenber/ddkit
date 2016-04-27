var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./wp.config')();
console.log(process.argv);

var obj = {
    path: config.output.path,
    publicPath: '/asset/',
    hot: true,
    stats: { colors: true  },
    historyApiFallback: true
};

if (process.argv[process.argv.length - 1] === '--release') {
    obj.contentBase = './release';
    config = require('./wp.config.release');
}

var server = new WebpackDevServer(webpack(config), obj);

require('fs')
    .readdirSync('./middleware')
    .forEach(function (file) {
        if (file.substr(-3) === '.js') {
            var _middleware = require('./middleware/' + file);
            server.use(_middleware);
        }
    });


server.listen(8080, function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8080');
});
