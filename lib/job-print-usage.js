/**
 * @desc This file prints how to use (compile, deploy etc.) library
 */

const chalk = require( 'chalk' );

exports.printUsage = ( options, config ) => {
    return new Promise( ( resolve ) => {

        console.log( chalk.dim( '------------------' ) );
        console.log( chalk.grey.italic( `Congratulations, ${ chalk.bold.cyan( config.libraryName ) } library has been created. \nUse bellow commands to start working on your project.` ) );
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `cd ${ chalk.bold( config.libraryName ) }/` ) }\t\t\t${ chalk.italic.grey( '‣ enter directory' ) }` );
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm run start` ) }\t\t\t\t${ chalk.italic.grey( '‣ start build and watch' ) }` );
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm run start:demo` ) }\t\t\t${ chalk.italic.grey( '‣ start demo server' ) }` );
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm publish` ) }\t\t\t\t${ chalk.italic.grey( '‣ publish library' ) }` );
        console.log( '' );

        resolve( true );
    } );
};
