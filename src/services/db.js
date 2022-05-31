import Dexie from 'dexie';

import postsJson from '../mocks/posts.json';

export const db = new Dexie('Platform');
db.version(1).stores({
  posts: '++id, heading, text, createdAt, hashtags, userId', // Primary key and indexed props
  authors: '++id, nickname, firstname, lastname',
});

db.posts.bulkAdd(postsJson.result);
