/* eslint no-console: 0 */
import webpack from 'webpack';
import fs from 'fs';
import WebpackDevServer from 'webpack-dev-server';
import definePlugin from './util/define-plugin.js';

// create array for optimizations
const optimizations = [definePlugin];

const buildConfig = require('../buildConfig.js');
const wpConfig = buildConfig.webpackConfig.debug;

export default (gulp) => {
    gulp.task('debug', function () {

        // append define plugin
        wpConfig.plugins = wpConfig.plugins ? wpConfig.plugins.concat(optimizations) : optimizations;

        // get server config
        let proxy = {};
        if (buildConfig.devServer && buildConfig.devServer.proxy) {
            proxy = buildConfig.devServer.proxy;
        }
        let headers = {};
        if (buildConfig.devServer && buildConfig.devServer.headers) {
            headers = buildConfig.devServer.headers;
        }

        // run webpack
        const compiler = webpack(wpConfig);
        const server = new WebpackDevServer(compiler, {
            contentBase: wpConfig.context,
            publicPath: '/asset/',
            hot: true,
            quiet: false,
            noInfo: false,
            watchOption: {
                aggregateTimeout: 300, // 延迟rebuild
                poll: true
            },
            headers,
            stats: {
                // chunks: false,
                colors: true
            },
            // historyApiFallback: true,
            historyApiFallback: {
                index: 'index.html'
            },
            proxy
        });

        // mock data with path
        fs.readdirSync('./middleware').forEach((file) => {
            if (file.substr(-3) === '.js') {
                let _middleware = require('../middleware/' + file);
                server.use(_middleware);
            }
        });

        server.listen(8080, function () {
            console.log('Webpack-Dev-Server: started on port 8080');
        });
    });
};
