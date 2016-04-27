export default {
    webpackConfig: {
        debug: require('./wp.config.js')(),
        production: require('./wp.config.release.js'),
        staging: require('./wp.config.staging.js')
    },
    devServer: {
        // settings for dev-server
        // @link: https://github.com/webpack/webpack-dev-server/pull/127
        proxy: [
            // {
            //     path: /^\/MOD/g,
            //     target: "http://192.168.1.224:8080"
            // },
            // {
            //     path: /^\/ADD/g,
            //     target: "http://192.168.1.224:8080"
            // },
            // {
            //     path: /^\/GET/g,
            //     target: "http://192.168.1.224:8080"
            // }
        ],
        headers: {
            // put custom headers here. e.g
            // 'X-template': express
        }
    }
};
