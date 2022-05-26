import { rest } from 'msw';
import postsJson from './posts.json';

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(postsJson),
    )
  }),
]
