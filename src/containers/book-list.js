import React, {Component } from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    if (this.props.books)  {
      return this.props.books.map((book) =>{
        return (
            <li key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title}</li>
        );
      });
    } else {
      return "loading...";
    }
  }

  render() {
    return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
          </ul>
    );
  }
}

function mapStateToProps(state) {
  return {books: state.books};
}

function mapDispatchToProps(dispatch) {
  // when selectbook is called, result is passed to all reducers
  return bindActionCreators({selectBook}, dispatch);
}

// the two maps get merged to make the props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
