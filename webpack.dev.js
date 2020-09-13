const { merge }  = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    node: false,
    devtool: 'source-map',
    devServer: {
        contentBase: path.join('./public/'),
        compress: true,
        port: 9000
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                map: {
                    inline: true
                },
            },
        }),
    ]
});


