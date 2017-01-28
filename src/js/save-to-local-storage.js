const svgTrash = '<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><title>trashcan</title><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" fill="#000" fill-rule="evenodd"/></svg>';

const conf = {
  heading: 'new-post__heading',
  text: 'new-post__main-text',
  submit: 'new-post__submit',
  newsList: 'news-list',
  post: '.news-list__item',
  after: 'news-list__item_first',
  removePost: '.remove-post',
};

function deletePost(el) {
  el.parentElement.remove()
}

function addPost(heading, text, className) {
  const postMarkup = '<li class="news-list__item"><h3 class="h3"><a class="h3__link" href="#">' + heading + '</a></h3><p class="p">' + text + '</p><button class="btn btn-default remove-post" title="Remove post" type="button" onclick="deletePost(this)">' + svgTrash + '</button></li>';
  document.getElementsByClassName(className)[0].innerHTML += postMarkup;
}

function loadPosts(posts) {
  let _length = posts.length;

  for(let i = 0; i < _length; i++) {
    const heading = posts[i][0];
    const text = posts[i][1];
    addPost(heading, text, conf.newsList);
  }

  // Put the object into storage
  localStorage.setItem('posts', posts);
}

loadPosts(posts);

function onSubmit() {
  const heading = document.getElementsByClassName(conf.heading)[0].value;
  const text = document.getElementsByClassName(conf.text)[0].value;

  addPost(heading, text, conf.after);

  // Store
  localStorage.setItem('heading', heading);
  localStorage.setItem('text', text);
}
