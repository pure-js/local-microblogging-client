export const getStories = async (url: string) =>
  fetch(url)
    .then(async (response) => response.json())
    .then((data) => data.result);

export default getStories;
