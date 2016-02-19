import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostCreate extends Component {
  render() {
    const {handleSubmit, fields:{title, categories, content}} = this.props;
    function hasDanger(field) {
      return field.touched && field.invalid ? 'has-danger' : '';
    }
    return (
        <form onSubmit = {handleSubmit(this.props.createPost)}>
          <h3>Create a New Post </h3>

          <div className={`form-group ${hasDanger(title)}`}>
            <label> Title </label>
            <input type="text" className = "form-control" {...title} />
            <div className="text-help">
              {title.touched?title.error:''}
            </div>
          </div>

          <div className={`form-group ${hasDanger(categories)}`}>
            <label> Categories </label>
            <input type="text" className = "form-control" {...categories} />
            <div className="text-help">
              {categories.touched?categories.error:''}
            </div>
          </div>

          <div className={`form-group ${hasDanger(content)}`}>
            <label> Content </label>
            <textarea className = "form-control" {...content}/>
            <div className="text-help">
              {content.touched?content.error:''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter categories';
  }
  if (!values.content) {
    errors.content = 'Please enter content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostCreate);