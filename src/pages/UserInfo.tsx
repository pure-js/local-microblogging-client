import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';

import type { IUser } from '@components/PostPreview';
import { db } from '@services/db';

function Info({ name }: IUser) {
  return (
    <main className="container">
      <div className="row">
        <article className="col-md-8 col-lg-6">
          <h1>
            { name }
          </h1>
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

  return authorArr ? authorArr.map(({
    id, username, name, dob, createdAt,
  }) => (
    <Info
      key={id}
      id={id}
      username={username}
      name={name}
      dob={dob}
      createdAt={createdAt}
    />
  )) : null;
}

export default UserInfo;
