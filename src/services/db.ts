import Dexie from 'dexie';

import postsJson from '../mocks/posts.json';
import authorsJson from '../mocks/authors.json';

export interface IAuthor {
  id: string;
  username: string;
  name: string;
}

export interface IPost {
  id: number;
  heading: string;
  text: string;
  createdAt: number;
  hashtags?: string[];
  userId: string;
  image?: {
    width?: number;
    height?: number;
    url?: File;
  };
}

export class MySubClassedDexie extends Dexie {
  posts!: Dexie.Table<IPost>;

  authors!: Dexie.Table<IAuthor>;

  constructor() {
    super('Platform');
    this.version(1).stores({
      posts: 'id, heading, text, createdAt, hashtags, userId',
      authors: 'id, username, name',
    });
  }
}

export const db = new MySubClassedDexie();

db.posts.count((count) => {
  if (count === 0) {
    db.posts.bulkPut(postsJson.result);
    db.authors.bulkPut(authorsJson);
  }
});
