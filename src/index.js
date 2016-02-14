import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAY3SjUYswBfQwBeWQkfH9me4QGBKk3K6M';

// Create a new component
// Produces HTML
const App = () => {
	return (
  <div>
      <SearchBar />
  </div>
  );
}

// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

