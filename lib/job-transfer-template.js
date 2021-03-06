/**
 * @desc This file creates library directory and copy library template files.
 * This file also takes cares of creating package.json file from final package.json object created in earlier step(s)
**/

const path = require( 'path' );
const chalk = require( 'chalk' );
const fs = require( 'fs-extra' );

exports.transferTemplate = ( { cwd, options, config, packageJson } ) => {
    return new Promise( async ( resolve ) => {

        // set library directory
        const libraryDir = path.resolve( cwd, config.libraryName );

        // ensure library directory exists
        await fs.ensureDir( libraryDir );

        // get template directory from selected library template
        const templateDir = path.resolve( process.env.installationDir, 'templates/' + config.libraryTemplate );

        // copy template files to library directory
        await fs.copy( templateDir, libraryDir, {
            filter: ( path ) => {

                // copy only files that does not include `node_modules`
                // ignore root directory for check (otherwise copy fails)
                if( path !== templateDir ) {
                    return false === /node_modules|package\.json|package-lock\.json/.test( path );
                }

                return true;
            }
        } );

        // replace package.json content
        const packageJsonString = JSON.stringify( packageJson, ( key, value ) => {

            // this is a replacer function to filter out unwanted keys
            // if git is not initialized through CLI, remove git related keys

            const gitRelatedPackageJsonKeys = [ 'repository', 'author', 'bugs', 'homepage',  ];

            if( ! options.git ) {
                if( gitRelatedPackageJsonKeys.includes( key ) ) {
                    return undefined; // return `undefined` to remove key:value
                }
            }

            // return value associated with the key
            return value;

        }, 4 ); // 4 space indentation

        // write JSON string to package.json
        await fs.writeFile( `${ libraryDir }/package.json`, packageJsonString );

        // transfer has been completed
        resolve( templateDir );
    } );
};
