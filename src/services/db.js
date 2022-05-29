import Dexie from 'dexie';

import postsJson from '../mocks/posts.json';

export const db = new Dexie('Posts');
db.version(1.3).stores({
  posts: '++id, heading, previewTxt, timestamp', // Primary key and indexed props
});

db.posts.bulkAdd(postsJson.result);
