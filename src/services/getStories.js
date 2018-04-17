import posts from '../mock-posts';

function getStories() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 5);
  });
}

export default getStories;
