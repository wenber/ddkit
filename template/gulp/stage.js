import gutil from 'gulp-util';
import webpack from 'webpack';
import {exec} from 'child_process';
import definePlugin from './util/define-plugin.js';

// create optimizations array
const optimizations = [
    definePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,
        },
        compress: {
           warnings: false,
        },
    }),
];

// get build config
const buildConfig = require('../buildConfig.js');
// get webpack config
const wpConfig = buildConfig.webpackConfig.staging;
// export initilizer
export default (gulp) => {
    gulp.task('stage', function(callback) {
        if (wpConfig.plugins) {
            wpConfig.plugins = wpConfig.plugins.concat(optimizations);
        } else {
            wpConfig.plugins = optimizations;
        }

        // run webpack
        webpack(wpConfig, function(err, stats) {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }
            // only log when errors
            gutil.log('[webpack]: ', stats.toString({
                chunks: false,
                modules: false,
                colors: true,
            }));
            exec('gulp assets', function (err) {
                if (err) throw err;
                console.log('--------------------------------------------');
                console.log('stage Done!');
                console.log('--------------------------------------------');
                callback();
            });
        });
    });
};