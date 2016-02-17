import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''}
  }

  onInputChange(evt) {
    console.log(evt.target.value);
  }

  render() {
    return (
        <form className="input-group">
          <input
              placeholder = "Get a five-day forecast in your favorite cities"
              value = {this.state.term}
              className="form-control"
              onChange={this.onInputChange}
              />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );
  }
}