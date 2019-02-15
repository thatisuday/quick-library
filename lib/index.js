/**
 * @desc This file starts executions of all jobs needed to create a library
**/

const chalk = require( 'chalk' );
const { Spinner } = require( './utils' );
const { processCommand } = require( './job-process-command' );
const { getLibraryConfig } = require( './job-get-library-config' );
const { makePackageJsonFile } = require( './job-make-package-json' );
const { transferTemplate } = require( './job-transfer-template' );
const { printUsage } = require( './job-print-usage' );
const { initializeGit } = require( './job-initialize-git' );
const { installPackages } = require( './job-install-packages' );

exports.startJobs = async () => {

    try {
        // get current working directory
        const cwd = process.cwd();

        // process command line options
        const options = await processCommand();

        // get library configuration
        const config = await getLibraryConfig( options, cwd );

        // make package.json file
        const packageJson = await makePackageJsonFile( config );

        // create and transfer template to library directory
        const doneTransfer = await transferTemplate( { cwd, options, config, packageJson } );

        // initialize git
        if( options.git ) {
            var gitSpinner = new Spinner( 'Initializing git repository' );
            const err = await initializeGit( cwd, options, config );
            
            if( err ) {
                gitSpinner.error( err );
            } else {
                gitSpinner.done( `${ chalk.bold( 'Initialized git repository' ) } ${ chalk.cyan( config.gitRepo ) }` );
            }
        }

        // install npm packages (modules)
        if( options.install ) {
            var installSpinner = new Spinner( 'Installing npm packages' );
            const err = await installPackages( cwd, options, config );
            
            if( err ) {
                installSpinner.error( err );
            } else {
                installSpinner.done( chalk.bold( 'Installed npm packages' ) );
            }
        }

        // print usage
        const donePrint = await printUsage( options, config );
        
    } catch( e ) {
        console.log( chalk.red.bold( 'Library creation failed!' ) );
        console.log( e );
        process.exit( 1 );
    }
};