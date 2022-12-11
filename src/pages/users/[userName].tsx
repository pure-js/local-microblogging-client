import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import type { IUser } from '@components/PostPreview';
import { db } from '@services/db';

function Info({ name, profilePicture }: IUser) {
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-1">
        <article className="col-span-12 md:col-span-8 lg:col-span-6">
          { profilePicture && (<img src={profilePicture.src} alt="User face" width={profilePicture.width} height={profilePicture.height} />) }
          <h1 className="text-4xl mt-2 mb-6">
            { name }
          </h1>
          <p>
            Joined two years ago
          </p>
        </article>
      </div>
    </main>
  );
}

function UserInfo() {
  const { userName } = useParams();
  const authorArr = useLiveQuery(
    () => db.authors
      .filter(({ username }) => username === userName)
      .toArray(),
  );

  const posts = useLiveQuery(
    () => db.posts
      // .where('text')
      // .anyOf(['The'])
      .orderBy('createdAt')
      .reverse()
      .toArray(),
  );

  return authorArr ? authorArr.map(({
    id, username, name, dob, createdAt, profilePicture
  }) => (
    <Info
      key={id}
      id={id}
      username={username}
      name={name}
      dob={dob}
      createdAt={createdAt}
      profilePicture={profilePicture}
    />
  )) : null;
}

export default UserInfo;
