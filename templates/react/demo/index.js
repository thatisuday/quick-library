import React from 'react';
import ReactDOM from 'react-dom';

// import library component
import { MyComponent } from '../dist'; // here `../dist` will be library name when somebody imports it

// create sample view
const App = () => {
    return (
        <MyComponent message='Welcome to react library!'/>
    );
};

// render
ReactDOM.render( <App />, document.getElementById( 'app' ) );