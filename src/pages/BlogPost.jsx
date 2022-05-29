import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLiveQuery } from 'dexie-react-hooks';

// import { db } from '../services/db';

function BlogPost() {
  const [post] = useState();
  // const { postId } = useParams();

  return (
    <main className="container">
      <h1>
        Heading
        { post?.heading }
      </h1>
    </main>
  );
}

export default BlogPost;
