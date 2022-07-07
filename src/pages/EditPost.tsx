import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '../services/db';
import type { IBlogPost } from '../components/PostPreview';

interface IBlogPostProps {
  post: IBlogPost;
}

function EditPostWrapper() {
  const { postId } = useParams();
  const posts = useLiveQuery(
    () => db.posts
      .filter(({ id }) => id === Number(postId))
      .toArray()
  );

  if (!posts) return null;
  return (<EditPost post={posts[0]} />);
}

function EditPost({ post } : IBlogPostProps) {
  const [heading, setHeading] = useState(post.heading);
  const [text, setText] = useState(post.text);
  const [image, setImage] = useState(post.image);
  const [status, setStatus] = useState('');
  const [hashtags, setHashtags] = useState('');

  const navigate = useNavigate();

  function handleImageChange(event: React.FormEvent<HTMLInputElement>) {
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

  async function UpdatePost() {
    try {
      await db.posts.update( id, {
        heading,
        text,
        createdAt: Date.now().toString(),
        image,
      });

      setStatus(`Post "${heading}" successfully updated. Post id ${id}`);
      navigate('/');
    } catch (error) {
      setStatus(`Failed to update ${heading}: ${error}`);
    }
  }

  // function createStory(event: Event) {
  function createStory(event) {
    event.preventDefault();
    UpdatePost();
  }

  return (
    <div className="container">
      <div className="row mb-3">
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
        <div className="col-md-8 col-lg-6">
          <h3 className="card-title">{ 'Any updates?' }</h3>
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
                placeholder="Write your text..."
                rows={5}
                className="form-control"
                value={text}
                onChange={(e) => { setText(e.target.value); }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Hashtags"
                rows={2}
                className="form-control"
                value={hashtags}
                onChange={(e) => { setHashtags(e.target.value); }}
              />
            </div>
            <div className="input-group mb-3">
              <label
                className="input-group-text"
                htmlFor="uploadImageInput"
              >
                Upload image
              </label>
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
                title="Update post"
                type="submit"
                className="btn btn-primary btn-lg new-post__submit"
              >
                <i className="glyphicon glyphicon-ok" />
                { 'Update it' }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPostWrapper;
