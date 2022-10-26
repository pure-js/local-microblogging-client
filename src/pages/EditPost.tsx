/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@services/db';
import type { IBlogPost } from '@components/PostPreview';

interface IBlogPostProps {
  post: IBlogPost;
}

function EditPost({ post } : IBlogPostProps) {
  const [heading, setHeading] = useState(post.heading);
  const [text, setText] = useState(post.text);
  const [image, setImage] = useState(post.image);
  const [status, setStatus] = useState('');
  const [hashtags, setHashtags] = useState('');

  const navigate = useNavigate();
  const { postId } = useParams();

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

  async function UpdatePost() {
    try {
      await db.posts.update(Number(postId), {
        heading,
        text,
        editedAt: Date.now().toString(),
        image,
      })
        .then((updated) => {
          if (updated) {
            setStatus(`Post "${heading}" successfully updated. Post id ${postId}`);
            navigate('/');
          } else {
            setStatus(`Nothing happend with ${postId}`);
          }
        });
    } catch (error) {
      setStatus(`Failed to update ${heading}: ${error}`);
    }
  }

  function updateStory(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    UpdatePost();
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-1 mb-3">
        { status && (<h3>{ status }</h3>) }
        { image && (
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <img
              id="preview"
              src={image}
              alt="Card cap"
              className="card-img-top"
            />
          </div>
        ) }
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <h3 className="card-title">Any updates?</h3>
          <form onSubmit={updateStory}>
            <div className="mb-3">
              <input
                placeholder="Title"
                type="text"
                className="input w-full"
                value={heading}
                onChange={(e) => { setHeading(e.target.value); }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Write your text..."
                rows={5}
                className="textarea w-full"
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
              <i className="glyphicon glyphicon-ok" />
              <input
                title="Update post"
                type="submit"
                className="btn btn-primary btn-outline new-post__submit"
                value="Update it"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function EditPostWrapper() {
  const { postId } = useParams();
  const posts = useLiveQuery(
    () => db.posts
      .filter(({ id }) => id === Number(postId))
      .toArray(),
  );

  return posts ? (<EditPost post={posts[0]} />) : null;
}

export default EditPostWrapper;
