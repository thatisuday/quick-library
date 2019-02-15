module.exports = {
    presets: [ '@babel/env', '@babel/react' ],
    plugins: [
        '@babel/transform-arrow-functions',
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-class-properties',
        [ '@babel/proposal-decorators', { 'legacy': true } ]
    ]
};