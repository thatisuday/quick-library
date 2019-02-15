/**
 * @desc This file installs git packages
 */

const path = require( 'path' );
const child_process = require( 'child_process' );

exports.installPackages = ( cwd, options, config ) => {
    return new Promise( ( resolve, reject ) => {

        // get library directory
        const libraryDir = path.resolve( cwd, config.libraryName );

        // execute shell command
        child_process.exec( `npm install`, { cwd: libraryDir }, ( err, stdout, stderr ) => {
            err ? resolve( 'Could not install npm packages' ) : resolve( false );
        } );
    } );
};
