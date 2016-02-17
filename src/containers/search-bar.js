import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(evt) {
    this.setState({term: evt.target.value});
  }
  onFormSubmit(evt) {
    window.alert("hello " + this.state.term);
    evt.preventDefault();
  }

  render() {
    return (
        <form className="input-group" onSubmit={this.onFormSubmit}>
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