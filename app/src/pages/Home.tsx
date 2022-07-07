import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useFeature } from '@growthbook/growthbook-react';

import PostPreview from '../components/PostPreview';
import Search from '../components/Search';
import { db } from '../services/db';

import type { IBlogPost } from '../components/PostPreview';

export function PostList() {
  const posts = useLiveQuery(
    () => db.posts
      // .where('text')
      // .anyOf(['The'])
      .orderBy('createdAt')
      .reverse()
      .toArray(),
  );

  return posts ? posts.map((post: IBlogPost) => (
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
  )) : null;
}

function Home() {
  const featSearchBar = useFeature('search-bar').on;

  return (
    <div className="container">
      <main className="row">
        { featSearchBar && (<Search />) }
        <section className="col-md-8 col-lg-6" role="feed">
          <PostList />
        </section>
      </main>
    </div>
  );
}

export default Home;
