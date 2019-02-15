/**
 * @desc This file initizes git repository
 */

const path = require( 'path' );
const child_process = require( 'child_process' );

exports.initializeGit = ( cwd, options, config ) => {
    return new Promise( ( resolve, reject ) => {

        // get library directory
        const libraryDir = path.resolve( cwd, config.libraryName );

        // read package json
        const templatePackageJson = require( path.resolve( config.libraryName, 'package.json' ) );
        
        // create git origin repo url
        const originUrl = templatePackageJson.repository.url.replace( 'git+', '' );

        // execute shell command
        child_process.exec( `git init && git remote add origin ${ originUrl }`, { cwd: libraryDir }, ( err, stdout, stderr ) => {
            err ? resolve( 'Could not initialize git repository' ) : resolve( false );
        } );
    } );
};
