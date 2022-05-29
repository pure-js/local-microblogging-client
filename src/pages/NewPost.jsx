import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db } from '../services/db';


const AddPost = ({ isEdit = false }) => {
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [previewTxt, setPreviewTxt] = useState('');

  const navigate = useNavigate();

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setImage(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // async function editPost() {
  //   const post = await db.posts
  //     .get(postId);
  //   console.log(post.heading, '333');
  // }
  // editPost();

  async function addPost() {
    try {
      const id = await db.posts.add({
        heading,
        previewTxt,
        body,
        timestamp: Date.now().toString(),
        image,
      });

      setStatus(`Post "${heading}" successfully added. Got id ${id}`);
      navigate('/');
    } catch (error) {
      setStatus(`Failed to add ${heading}: ${error}`);
    }
  }

  function createStory(event) {
    event.preventDefault();
    const story = {
      heading,
      body,
      image,
      timestamp: Date.now().toString(),
    };
    addPost();
  }

  return (
    <div className="container">
      <div className="row card mb-3">
        { status && (<h3>{ status }</h3>) }
        { image && (
          <div className="col-md-10 col-lg-6">
            <img
              id="preview"
              src={image}
              alt="Card cap"
              className="card-img-top"
            />
          </div>
        ) }
        <div className="col-md-10 col-lg-6 card-body">
          <h3 className="card-title">{isEdit ? 'Any updates?' : 'What\'s new?'}</h3>
          <form onSubmit={createStory}>
            <div className="mb-3">
              <input
                placeholder="Title"
                type="text"
                className="form-control"
                value={heading}
                onChange={(e) => { setHeading(e.target.value); }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Preview text"
                rows="2"
                className="form-control"
                value={previewTxt}
                onChange={(e) => { setPreviewTxt(e.target.value); }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Write your text..."
                rows="5"
                className="form-control"
                value={body}
                onChange={(e) => { setBody(e.target.value); }}
              />
            </div>
            <div className='input-group mb-3'>
              <label
                className="input-group-text"
                htmlFor="uploadImageInput"
              >Upload image</label>
              <input
                id="uploadImageInput"
                type="file"
                title="Add image"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <button
                title="Add new post"
                type="submit"
                className="btn btn-primary btn-lg new-post__submit"
              >
                <i className="glyphicon glyphicon-ok" />
                { isEdit ? 'Update it' : 'Post it' }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
