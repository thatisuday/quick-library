#!/usr/bin/env node

const checkNode = require( 'check-node-version' );
const _ = require( 'lodash' );
const chalk = require( 'chalk' );
const { startJobs } = require( './lib' );

/**************************************/

// set `quick-library` installation path to environment
process.env.installationDir = __dirname; 

/**************************************/

// check if installed node version is greater than `8.11.1`
const minRequiredNodeVersion = '8.11.1';
checkNode( {
    node: `>=${ minRequiredNodeVersion }`
}, ( err, result ) => {

    // if check has error or version not satisfied, print error
    if( ! _.isEmpty( err ) || ! _.get( result, 'versions.node.isSatisfied' ) ) {
        
        // get current node version
        const currentNodeVersion = _.get( result, 'versions.node.version.raw', 'less than v8.0.0' );

        // prompt user for node version mismatch error
        console.log( chalk.red( `Please install node version greater than ${ chalk.bold( minRequiredNodeVersion ) }. Your current version is ${ chalk.bold( currentNodeVersion ) }` ) );
    } else {

        // start jobs execution of the library
        startJobs(); // => async call
    }
} );


