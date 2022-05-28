import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import Story from '../components/Story';
import getStories from '../services/getStories';
import { db } from '../services/db';


export function PostList() {
  const posts = useLiveQuery(
    () => db.posts.toArray()
  );

  return (
    <div className="card-columns row">
      {posts?.map(post => (
        <div key={post.id} className='col-md-6 col-lg-4'>
          <Story
            id={post.id}
            heading={post.heading}
            body={post.body}
            image={post.image}
            timestamp={post.timestamp}
          />
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  const [stories, setStories] = useState(null);

  useEffect(() => {
    getStories('/posts').then((data) => {
      setStories(data);
    });
  }, [])

  function deleteStory(key) {
    stories = stories.filter(obj => obj.heading !== key);
    setStories(stories);
  }

  return (
    <main className="container">
      <PostList />
    </main>
  );
}

export default Home;
