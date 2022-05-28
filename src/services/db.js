import Dexie from 'dexie';
import {importDB, exportDB, importInto, peakImportFile} from "dexie-export-import";

import { getStories } from '../services/getStories';

export const db = new Dexie('Posts');
db.version(1).stores({
  posts: '++id, heading, previewTxt, body, timestamp, image', // Primary key and indexed props
});

getStories('/posts').then((data) => { console.log(3); console.log('data', data) });
