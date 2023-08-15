import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useFeature } from '@growthbook/growthbook-react';

import { db } from '@services/db';
import PostPreview from '@components/PostPreview';
import Search from '@components/Search';

import type { IBlogPost } from '@components/PostPreview';

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
        img={post.img}
        createdAt={post.createdAt}
        userId={post.userId}
      />
    </Fragment>
  )) : null;
}

function Home() {
  const featSearchBar = useFeature('search-bar').on;

  return (
    <div className="container mx-auto px-4">
      <main className="grid grid-cols-12 gap-1">
        { featSearchBar && (<Search />) }
        <section className="col-span-12 md:col-span-8 lg:col-span-7" role="feed">
          <PostList />
        </section>
      </main>
    </div>
  );
}

export default Home;
