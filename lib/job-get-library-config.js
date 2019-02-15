/**
 * @desc This file presents inquirer options to and gets library config (info)
 * which is used to generate custom library files
 */

const fs = require( 'fs-extra' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const inquirer = require( 'inquirer' );

// library templates
const LIBRARY_TEMPLATES = exports.LIBRARY_TEMPLATES = {
    react: { name: 'React', value: 'react' },
    angular: { name: 'Angular (4+)', value: 'angular' },
    vue: { name: 'Vue', value: 'vue' }
};

// git host (providers)
const GIT_HOSTS = exports.GIT_HOSTS = {
    github: { name: 'GitHub', value: 'github' },
    gitlab: { name: 'GitLab', value: 'gitlab' }
};

exports.getLibraryConfig = ( commandOptions, cwd ) => {
    return new Promise( async ( resolve ) => {

        // get config from inquirer prompt
        const config = inquirer.prompt( [

            // library name
            {
                type: 'input',
                name: 'libraryName',
                message: 'Enter library name',
                default: 'test-library',
                validate: ( libraryName ) => {

                    // check if library directory already exists, show error if exists
                    const libraryDir = path.resolve( cwd, libraryName );
                    const pathExists = fs.pathExistsSync( libraryDir );

                    if( pathExists ) {
                        // return error string, inquirer will handle it
                        return chalk.red( `${ chalk.bold( libraryName ) } directory already exists.` );
                    }

                    return true;
                }
            },

            // library description
            {
                type: 'input',
                name: 'libraryDesc',
                message: 'Enter library description',
                default: 'test-library description'
            },

            // template config
            {
                type: 'list',
                name: 'libraryTemplate',
                message: 'Select a library template',
                choices: [
                    { name: LIBRARY_TEMPLATES.react.name, value: LIBRARY_TEMPLATES.react.value },
                    
                    // @todo: add support for other templates
                    //{ name: LIBRARY_TEMPLATES.angular.name, value: LIBRARY_TEMPLATES.angular.value },
                    //{ name: LIBRARY_TEMPLATES.vue.name, value: LIBRARY_TEMPLATES.vue.value },
                ],
                default: 'react'
            },

            // git config
            ...( commandOptions.git ? [
                {
                    type: 'list',
                    name: 'gitHost',
                    message: 'Select git reposiory host',
                    choices: [
                        { name: GIT_HOSTS.github.name, value: GIT_HOSTS.github.value },
                        { name: GIT_HOSTS.gitlab.name, value: GIT_HOSTS.gitlab.value },
                    ],
                    default: GIT_HOSTS.github.value
                },
                {
                    type: 'input',
                    name: 'gitUsername',
                    message: ( session ) => `Enter ${ session.gitHost } username`,
                    default: 'test-username'
                },
                {
                    type: 'input',
                    name: 'gitRepo',
                    message: ( session ) => `Enter ${ GIT_HOSTS[session.gitHost].name } repository name`,
                    default: ( session ) => session.libraryName
                },
            ] : [] )
        ].filter( Boolean ) );

        // send `complete` config as promise resolution
        resolve( config );
    } );
};
