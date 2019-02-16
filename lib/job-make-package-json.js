/**
 * @desc This file makes package.json file of library based on user input
 */

const path = require( 'path' );
const renderJSON = require('json-templater/object');

exports.makePackageJsonFile = ( options, config ) => {
    return new Promise( ( resolve ) => {

        // get package.json template from template directory selected by the user
        const templatePackageJson = require( path.resolve( process.env.installationDir, 'templates/' + config.libraryTemplate + '/package.json' ) );

        // replace variables from template package with config
        const finalPackageJson = renderJSON( templatePackageJson, config );

        // replace package name with user provided name
        // @warning : as package.json name must be simple string, we can not use it as template with `{{}}` notation
        finalPackageJson.name = config.libraryName;

        // set package config
        finalPackageJson.config.inlineCss = true === config.inlineCss;

        // send json as promise resolution
        resolve( finalPackageJson );
    } );
};
