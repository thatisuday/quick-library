const path = require( 'path' );
const webpack = require( 'webpack' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const _ = require( 'lodash' );

/*-------------------------------------------------*/

module.exports = {

    // webpack optimization mode
    mode: 'development',

    // entry file(s)
    entry: path.resolve( __dirname, 'index.js' ),

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
        new HTMLWebpackPlugin( {
            template: path.resolve( __dirname, 'index.html' )
        } )
    ],

    // development server configuration
    devServer: {
        
        // do not open browser on server start (annoying)
        open: false,
    },

};