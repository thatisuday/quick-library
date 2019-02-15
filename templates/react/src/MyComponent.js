import React from 'react';

export class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className='container'>
                <h1 className='heading' style={ { color: 'blue' } }>{ this.props.message }</h1>
            </div>
        );
    }
}