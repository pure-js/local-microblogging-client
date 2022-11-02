import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import type { IBlogPost } from '@components/PostPreview';
import { db } from '@services/db';

function Post({ heading, text }: IBlogPost) {
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-1">
        <article className="col-span-12 md:col-span-8 lg:col-span-6">
          <h1 className="text-4xl mt-2 mb-6">
            { heading }
          </h1>
          <p className="text-lg">
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
      .toArray(),
  );

  return postArr ? postArr.map(({ id, heading, text }) => (
    <Post
      key={id}
      heading={heading}
      text={text}
    />
  )) : null;
}

export default BlogPost;
