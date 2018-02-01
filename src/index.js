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
