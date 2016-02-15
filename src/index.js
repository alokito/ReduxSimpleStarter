import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAY3SjUYswBfQwBeWQkfH9me4QGBKk3K6M';

// Create a new component
// Produces HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }
  render() {
    return (
        <div>
          <SearchBar />
        </div>
    );
  }
}

// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

