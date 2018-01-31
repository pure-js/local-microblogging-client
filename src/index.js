import posts from './js/mock-posts';
import {
  readURL,
  deletePost,
  createPost,
  loadPosts,
  onSubmit,
} from './services/storiesService';

loadPosts(posts);
