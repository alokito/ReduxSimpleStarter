// need React for JSX
import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={evt => console.log(evt.target.value)} />;
  }

}

export default SearchBar;

