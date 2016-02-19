import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {Link} from 'react-router';

class PostShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const {post} = this.props;
    return (
      <div>
        <Link to="/">Back to index</Link>
        <h3>{post.title} </h3>
        <h6>Categories: {post.categories} </h6>
        <p> {post.content} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost})(PostShow);