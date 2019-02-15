const ora = require( 'ora' );

// export terminal spinner class ( using `ora` )
exports.Spinner = class {
    constructor( message ) {
        const spinner = ora( { spinner: 'point' } );

        // override some methods
        spinner.done = spinner.succeed;
        spinner.error = spinner.fail;

        // return `spinner` as `this` object
        return spinner.start( message );
    }
}