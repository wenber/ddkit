import webpack from 'webpack';

// definePlugin takes ram strings, you can put strings of JS if you want it
const definePlugin = new webpack.DefinePlugin({
    __WEBPACK__: true, // we are on the webpack
    __DEV__: process.env.BUILD_DEV // dev environment indication
});

export default definePlugin;
