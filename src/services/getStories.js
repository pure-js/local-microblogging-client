export const getStories = url => fetch(url)
  .then(response => response.json())
  .then(data => data.result);

export default getStories;
