// need React for JSX
import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return <div>
        <input onChange={
          evt => this.setState({term: evt.target.value})
        } >
        Value of the input:  {this.state.term}
      </div>;
  }

}

export default SearchBar;

