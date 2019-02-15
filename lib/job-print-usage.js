/**
 * @desc This file prints how to use (compile, deploy etc.) library
 */

const chalk = require( 'chalk' );

exports.printUsage = ( options, config ) => {
    return new Promise( ( resolve ) => {

        console.log( chalk.dim( '------------------' ) );
        console.log( chalk.grey.italic( `Congratulations, ${ chalk.bold.cyan( config.libraryName ) } library has been created. \nUse bellow commands to start working on your project.` ) );
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `cd ${ chalk.bold( config.libraryName ) }/` ) }           ${ chalk.italic.grey( '‣ enter directory' ) }` ); // 11 spaces
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm run start` ) }     ${ chalk.italic.grey( '‣ start demo server' ) }` ); // 5 spaces
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm run build` ) }     ${ chalk.italic.grey( '‣ create library build' ) }` ); // 5 spaces
        console.log( `${ chalk.white.italic( '$' ) } ${ chalk.green( `npm publish` ) }       ${ chalk.italic.grey( '‣ publish library' ) }` ); // 7 spaces
        console.log( '' );

        resolve( true );
    } );
};
