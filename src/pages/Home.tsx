import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import PostPreview from '../components/PostPreview.tsx';
import { db } from '../services/db';

import type { IBlogPost } from '../components/PostPreview';

export function PostList() {
  const posts = useLiveQuery(
    () => db.posts
      .orderBy('createdAt')
      .reverse()
      .toArray(),
  );

  return posts?.map((post: IBlogPost) => (
    <Fragment key={post.id}>
      <PostPreview
        id={post.id}
        heading={post.heading}
        text={post.text}
        image={post.image}
        createdAt={post.createdAt}
        userId={post.userId}
      />
    </Fragment>
  ));
}

function Home() {
  return (
    <div className="container">
      <main className="row">
        <div className="col-md-8 col-lg-6">
          <PostList />
        </div>
      </main>
    </div>
  );
}

export default Home;
