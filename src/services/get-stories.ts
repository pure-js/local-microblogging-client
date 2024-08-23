export const getStories = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.result);

export default getStories;
