import React from 'react';

export class MyComponent extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className='container'>
                <h1 className='heading'>{ this.props.message }</h1>
            </div>
        );
    }
}