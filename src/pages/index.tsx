import { Fragment } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useFeature } from '@growthbook/growthbook-react';

import { db } from '@services/db';
import PostPreview from '@components/PostPreview';
import Search from '@components/Search';

import type { IBlogPost } from '@components/PostPreview';
import { timestampToLocaleString } from '@services/timestampToLocaleString';

function handleDeleteStory(id: string) {
  db.posts.delete(id);
}

export function PostList() {
  const posts = useLiveQuery(() =>
    db.posts
      // .where('text')
      // .anyOf(['The'])
      .orderBy('createdAt')
      .reverse()
      .toArray(),
  );

  return posts
    ? posts.map((post: IBlogPost) => {
        const { date, htmlDatetime } = timestampToLocaleString(post.createdAt);
        return (
          <Fragment key={post.id}>
            <PostPreview
              id={post.id}
              heading={post.heading}
              text={post.text}
              img={post.img}
              date={date}
              htmlDatetime={htmlDatetime}
              userId={post.userId}
              onDelete={handleDeleteStory}
            />
          </Fragment>
        );
      })
    : null;
}

function Home() {
  const featSearchBar = useFeature('search-bar').on;

  return (
    <div className="container mx-auto px-4">
      <main className="grid grid-cols-12 gap-1">
        {featSearchBar && <Search />}
        <section
          className="col-span-12 md:col-span-8 lg:col-span-7"
          role="feed"
        >
          <PostList />
        </section>
      </main>
    </div>
  );
}

export default Home;
