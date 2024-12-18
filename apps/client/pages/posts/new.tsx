import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '~/components/input';
import { db } from '~/services/db';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function AddPost() {
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(undefined);
  const [status, setStatus] = useState('');
  const [hashtags, setHashtags] = useState('');

  const navigate = useNavigate();

  function handleImageChange(event: React.FormEvent<HTMLInputElement>) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        setImage(reader.result);
      },
      false,
    );

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
        id: getRandomInt(999999),
        heading,
        text,
        createdAt: Math.floor(Date.now() / 1000),
        userId: uuidv4(),
        image,
      });

      setStatus(`Post "${heading}" successfully added. Got id ${id}`);
      navigate('/');
    } catch (error) {
      setStatus(`Failed to add ${heading}: ${error}`);
    }
  }

  function createStory(event: React.FormEvent) {
    event.preventDefault();
    addPost();
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-3 grid grid-cols-12 gap-1">
        {status && <h3>{status}</h3>}
        {image && (
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <img
              id="preview"
              src={image}
              alt="Card cap"
              className="card-img-top"
            />
          </div>
        )}
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <h3 className="mb-5 mt-3 text-2xl">What&apos;s new?</h3>
          <form onSubmit={createStory}>
            <div className="mb-3">
              <Input
                placeholder="Title"
                value={heading}
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Write your text..."
                rows={5}
                className="textarea w-full text-lg"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Hashtags"
                rows={2}
                className="textarea w-full text-lg"
                value={hashtags}
                onChange={(e) => {
                  setHashtags(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              {/* <label
                className="text-sm flex-1"
                htmlFor="uploadImageInput"
              >
                Upload image
              </label> */}
              <input
                id="uploadImageInput"
                type="file"
                title="Add image"
                className="mt-2 block w-full cursor-pointer text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-500 hover:file:bg-violet-100"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <button
                title="Add new post"
                type="submit"
                className="btn btn-outline btn-primary mt-5"
              >
                <i className="glyphicon glyphicon-ok" />
                Post it
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
