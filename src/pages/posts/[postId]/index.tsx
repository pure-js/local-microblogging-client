import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import type { IBlogPost } from '~/components/PostPreview';
import { db } from '~/services/db';

function Post({ heading, text }: IBlogPost) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-1">
        <article className="col-span-12 md:col-span-8 lg:col-span-6">
          <h1 className="text-4xl mt-2 mb-6">{heading}</h1>
          <p className="text-lg">{text}</p>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5"
            onClick={handleNavigate}
          >
            Go to home
          </button>
        </article>
      </div>
    </main>
  );
}

function BlogPost() {
  const { postId } = useParams();
  const postArr = useLiveQuery(async () =>
    db.posts.filter(({ id }) => id === Number(postId)).toArray(),
  );

  return postArr
    ? postArr.map(({ id, heading, text }) => (
        <Post key={id} heading={heading} text={text} />
      ))
    : null;
}

export default BlogPost;
