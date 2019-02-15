/**
 * @desc This file makes package.json file of library based on user input
 */

const path = require( 'path' );
const renderJSON = require('json-templater/object');

exports.makePackageJsonFile = ( config ) => {
    return new Promise( ( resolve ) => {

        // get package.json template from template directory selected by the user
        const templatePackageJson = require( path.resolve( process.env.installationDir, 'templates/' + config.libraryTemplate + '/package.json' ) );

        // replace variables from template package with config
        const finalPackageJson = renderJSON( templatePackageJson, config )

        // send json as promise resolution
        resolve( finalPackageJson );
    } );
};
