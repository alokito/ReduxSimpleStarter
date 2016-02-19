import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostsIndex from './components/posts_index';
import PostCreate from './components/post_create';
import PostShow from './components/post_show';
import App from './components/app';

export default (
 <Route path="/" component={App} >
   <IndexRoute component={PostsIndex} />
   <Route path="create" component={PostCreate} />
   <Route path="posts" component={PostsIndex} />
   <Route path="posts/:id" component={PostShow} />
 </Route>
);

