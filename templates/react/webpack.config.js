const path = require( 'path' );
const webpack = require( 'webpack' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const _ = require( 'lodash' );

/*-------------------------------------------------*/

module.exports = {

    // watch for changes and build
    watch: true,

    // webpack optimization mode
    mode: 'production',

    // entry file(s)
    entry: './src/index.js',

    // output file(s) and chunks
    output: {
        libraryTarget: 'umd',
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js'
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new PeerDepsExternalsPlugin(),
    ],

    // development server configuration
    /* devServer: {

        // write file to disk in watch mode
        writeToDisk: true
    }, */

    // generate source map
    devtool: 'source-map'

};