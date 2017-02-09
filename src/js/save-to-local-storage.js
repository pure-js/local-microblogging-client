const svgTrash = '<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><title>trashcan</title><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" fill="#000" fill-rule="evenodd"/></svg>';

const conf = {
  heading: 'js-new-post__heading',
  text: 'js-new-post__main-text',
  submit: 'new-post__submit',
  newsList: 'js-news-list',
  post: 'js-news-list__item',
  removePost: '.remove-post',
};

function deletePost(el) {
  let blogPost = el.parentElement.parentElement;
  if (blogPost.className.includes(conf.post)) {
    blogPost.remove()
  }
}

function createPost(heading, text, className) {
  const postMarkup = `
    <div class="card-block">
      <h3 class="card-title"><a class="h3__link" href="#">` + heading + `</a></h3>
      <p class="card-text">` + text + `</p>
      <button class="btn btn-default remove-post" title="Remove post" type="button" onclick="deletePost(this)">` + svgTrash + `</button>
    </div>`;

  let newEl = document.createElement('section');
  newEl.classList.add('card', 'js-news-list__item');
  newEl.innerHTML = postMarkup;
  const el = document.getElementsByClassName(className)[0];
  el.insertBefore(newEl, el.firstChild);

  let lo = JSON.parse(localStorage.getItem('posts'));
  lo.push([heading, text]);

  // Store
  localStorage.removeItem('posts');
  localStorage.setItem('posts', JSON.stringify(lo));
}

function loadPosts(posts) {
  // Put the object into storage
  localStorage.setItem('posts', JSON.stringify(posts));

  let _length = posts.length;

  for(let i = 0; i < _length; i++) {
    const heading = posts[i][0];
    const text = posts[i][1];
    createPost(heading, text, conf.newsList);
  }
}

loadPosts(posts);

function onSubmit() {
  const heading = document.getElementsByClassName(conf.heading)[0].value;
  const text = document.getElementsByClassName(conf.text)[0].value;

  createPost(heading, text, conf.newsList);
}
