import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import PostPreview from '../components/PostPreview';
import { db } from '../services/db';


export function PostList() {
  const posts = useLiveQuery(
    () => db.posts
      .orderBy('timestamp')
      .reverse()
      .toArray()
  );

  return (
    <div className="card-columns row">
      {posts?.map(post => (
        <div key={post.id} className='col-md-6 col-lg-4'>
          <PostPreview
            id={post.id}
            heading={post.heading}
            previewTxt={post.previewTxt}
            image={post.image}
            timestamp={post.timestamp}
          />
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <main className="container">
      <PostList />
    </main>
  );
}

export default Home;
