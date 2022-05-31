import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import PostPreview from '../components/PostPreview';
import { db } from '../services/db';

export function PostList() {
  const posts = useLiveQuery(
    () => db.posts
      .orderBy('createdAt')
      .reverse()
      .toArray(),
  );

  return posts?.map((post) => (
    <Fragment key={post.id}>
      <PostPreview
        id={post.id}
        heading={post.heading}
        text={post.text}
        image={post.image}
        createdAt={post.createdAt}
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
