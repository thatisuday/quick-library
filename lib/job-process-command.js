/**
 * @desc Process command line options using commander.js
 */

const program = require( 'commander' );
const _ = require( 'lodash' );
const packageInfo = require( '../package.json' );

exports.processCommand = () => {
    return new Promise( ( resolve ) => {

        // default options
        const defaultOptions = {
            install: true,
            git: true,
            inlineCss: false
        };

        // get command line options using commander.js
        program
            .version( packageInfo.version, '-v, --version' )
            .option( '--no-install', 'Do not install npm dependencies' )
            .option( '--no-git', 'Do not initialize git repository' )
            .option( '-i, --inline-css', 'Keep CSS inside JavaScript (no css extract)' )
            .parse( process.argv )
        ;

        // extract options from program object
        const options = _.pick( program, [ 'install', 'git', 'inlineCss' ] );

        // send `complete` options as promise resolution
        resolve( _.merge( {}, defaultOptions, options ) );
    } );
};
