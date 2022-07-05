import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useFeature } from '@growthbook/growthbook-react';

import PostPreview from '../components/PostPreview.tsx';
import Search from '../components/Search.tsx';
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
  const searchBar = useFeature('search-bar').on;

  return (
    <div className="container">
      <main className="row">
        { searchBar && (<Search />) }
        <section className="col-md-8 col-lg-6" role="feed">
          <PostList />
        </section>
      </main>
    </div>
  );
}

export default Home;
