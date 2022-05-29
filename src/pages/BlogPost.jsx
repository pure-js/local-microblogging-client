import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '../services/db';

const BlogPost = () => {
  const [post, setPost] = useState();
  const { postId } = useParams();

  // async function getPost() {
  //   const post = await db.posts
  //     .get(postId);
  //   console.log(post.heading, 'Post')
  //   // return post;
  //     // .then(function (deleteCount) {
  //     //   console.log( `Deleted ${deleteCount} objects`);
  //     // });
  // }
  // getPost();

  return (
    <main className="container">
      <h1>Heading { post?.heading }</h1>
    </main>
  )
}

export default BlogPost;
