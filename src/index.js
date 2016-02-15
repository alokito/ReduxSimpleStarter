import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAY3SjUYswBfQwBeWQkfH9me4QGBKk3K6M';

// Create a new component
// Produces HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        videos: [],
        selectedVideo: null
        };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos: videos,
      selectedVideo: videos[0]});
    });
  }
  render() {
    return (
        <div>
          <SearchBar />
          <VideoDetail video={ this.state.selectedVideo} />
          <VideoList videos={ this.state.videos } />
        </div>
    );
  }
}

// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

