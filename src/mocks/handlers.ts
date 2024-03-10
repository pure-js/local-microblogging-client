// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import postsJson from './posts.json';

export const handlers = [
  rest.get('/posts', async (req, res, ctx) =>
    res(ctx.status(200), ctx.json(postsJson)),
  ),
];
