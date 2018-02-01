import posts from './js/mock-posts';
import {
  readURL,
  deletePost,
  createPost,
  loadPosts,
  onSubmit,
} from './services/storiesService';

import styles from './styles/main.scss';

loadPosts(posts);


import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
