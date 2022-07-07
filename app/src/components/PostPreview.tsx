import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../services/db.ts';
import { timestampToLocaleString } from '../services/timestampToLocaleString';

interface IAuthor {
  userId: string;
}

function Author({ userId }: IAuthor) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  async function authors() {
    const currentAuthor = await db.authors.get(userId);
    setName(currentAuthor.name);
    setUsername(currentAuthor.username);
  }

  useEffect(() => {
    authors();
  }, []);

  return (
    <div className="col-9">
      <Link to={`/users/${username}`}>{ name }</Link>
      {' '}
      <span className="text-muted">{`@${username}`}</span>
    </div>
  );
}

export interface IBlogPost {
  id: number;
  image?: string;
  heading: string;
  text: string,
  createdAt: string,
  userId: string,
}

function BlogPost({
  id, heading, text, createdAt, image = '', userId,
}: IBlogPost) {
  const [isLiked, setIsLiked] = useState(false);

  function handleDeleteStory() {
    db.posts
      .delete(id);
  }

  const { date, htmlDatetime } = timestampToLocaleString(createdAt);

  return (
    <article className="card mb-3">
      { image && (
        <img className="img-fluid" src={image} alt="Card cap" />
      )}
      <div className="card-header bg-transparent border-0 row">
        <Author userId={userId} />
        <div className="col-3 d-flex align-items-center justify-content-end">
          <p className="card-text">
            <time dateTime={htmlDatetime} className="text-muted">{date}</time>
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card-body">
          <h3 className="card-title">
            <Link to={`/posts/${id}`} className="">{heading}</Link>
          </h3>
          <p className="card-text">{text}</p>

        </div>
        <div className="card-footer bg-transparent border-0">
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-default"
                title="Like it!"
                type="button"
                onClick={(e) => { setIsLiked(!isLiked); e.currentTarget.blur(); }}
              >
                { isLiked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                ) }
              </button>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="btn-group" role="group">
                <Link
                  to={`/posts/${id}/edit`}
                  className="btn btn-default"
                  title="Edit post"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <title>Pencil</title>
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </Link>
                <button
                  className="btn btn-default"
                  title="Remove post"
                  type="button"
                  onClick={handleDeleteStory}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <title>Trash can</title>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </button>
                <button
                  className="btn btn-default"
                  title="Show more options"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
