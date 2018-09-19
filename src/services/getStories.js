import posts from '../mock-posts';

function getStories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 5);
  });
}

export default getStories;
