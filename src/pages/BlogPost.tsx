import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import type { IBlogPost } from '../components/PostPreview';
import { db } from '../services/db';

function Post({ heading, text }: IBlogPost) {
  return (
    <main className="container">
      <div className='row'>
        <article className="col-md-8 col-lg-6">
          <h1>
            { heading }
          </h1>
          <p>
          { text }
          </p>
        </article>
      </div>
    </main>
  );
}

function BlogPost() {
  const { postId } = useParams();
  const postArr = useLiveQuery(
    () => db.posts
      .filter(({ id }) => id === Number(postId))
      .toArray()
  );

  return postArr ? postArr.map(({ id, heading, text }) => (
    <Post
      key={id}
      heading={heading}
      text={text}
    />) 
  ) : null
}

export default BlogPost;
