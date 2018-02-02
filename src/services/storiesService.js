
const conf = {
  heading: 'js-new-post__heading',
  text: 'js-new-post__main-text',
  submit: 'new-post__submit',
  newsList: 'js-news-list',
  post: 'js-news-list__item',
  removePost: '.remove-post',
};

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      document.getElementById('preview').src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}



function createPost(heading, text, className) {
  const postMarkup = `
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title"><a class="h3__link" href="#">${heading}</a></h3>
      <p class="card-text">${text}</p>
      <button class="btn btn-default remove-post" title="Remove post" type="button" onclick="deletePost(this)">${svgTrash}</button>
    </div>`;

  const newEl = document.createElement('section');
  newEl.classList.add('card', 'js-news-list__item');
  newEl.innerHTML = postMarkup;
  const el = document.getElementsByClassName(className)[0];
  el.insertBefore(newEl, el.firstChild);

  const lo = JSON.parse(localStorage.getItem('posts'));
  lo.push([heading, text]);

  // Store
  localStorage.removeItem('posts');
  localStorage.setItem('posts', JSON.stringify(lo));
}

function loadPosts(posts) {
  // Put the object into storage
  localStorage.setItem('posts', JSON.stringify(posts));

  const { length } = posts;

  for (let i = 0; i < length; i++) {
    const heading = posts[i][0];
    const text = posts[i][1];
    createPost(heading, text, conf.newsList);
  }
}

function onSubmit() {
  const heading = document.getElementsByClassName(conf.heading)[0].value;
  const text = document.getElementsByClassName(conf.text)[0].value;

  createPost(heading, text, conf.newsList);
}

export {
  readURL,
  deletePost,
  createPost,
  loadPosts,
  onSubmit,
};
