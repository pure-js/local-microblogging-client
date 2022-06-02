import Dexie from 'dexie';

import postsJson from '../mocks/posts.json';
import authorsJson from '../mocks/authors.json';

export const db = new Dexie('Platform');
db.version(1).stores({
  posts: '++id, heading, text, createdAt, hashtags, userId', // Primary key and indexed props
  authors: 'id, username, name',
});

db.posts.bulkPut(postsJson.result);
db.authors.bulkPut(authorsJson);
