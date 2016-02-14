import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// Produces HTML
const App = () => {
	return <div>Hi!</div>;
}

// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

