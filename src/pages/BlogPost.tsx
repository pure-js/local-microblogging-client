import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLiveQuery } from 'dexie-react-hooks';

// import { db } from '../services/db';

interface IPost {
  heading: string;
}

function BlogPost() {
  const [post] = useState<IPost | undefined>();
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
