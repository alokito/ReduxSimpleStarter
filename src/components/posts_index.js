import React, {Component} from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log("should fetch");
  }
  render() {
    return (
        <div>List of blog Posts</div>
    );
  }
}

export default PostsIndex;