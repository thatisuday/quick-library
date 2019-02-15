const path = require( 'path' );
const webpack = require( 'webpack' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const _ = require( 'lodash' );
const packageJSON = require( './package.json' );

// should include css in JavaScript bundle
const inlineCss = packageJSON.config.inlineCss;

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
                use: [ ( inlineCss ? 'style-loader' : MiniCssExtractPlugin.loader ), 'css-loader', 'postcss-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new PeerDepsExternalsPlugin(),

        // inline or extract css
        inlineCss ? null : new MiniCssExtractPlugin( {
            filename: 'styles.css'
        } )
    ].filter( Boolean ),

    // development server configuration
    // no need of dev-server, as we are running `webpack` in watch mode
    /* devServer: {

        // write file to disk in watch mode
        writeToDisk: true
    }, */

    // generate source map
    devtool: 'source-map'

};