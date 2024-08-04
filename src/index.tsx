import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import './index.css';

const App = lazy(async () => import('~/components/app'));
const Home = lazy(async () => import('~/pages/index'));
const NoMatch = lazy(async () => import('~/pages/[all]'));

const NewPost = lazy(async () => import('~/pages/posts/new'));
const BlogPost = lazy(async () => import('~/pages/posts/[postId]'));
const EditPost = lazy(async () => import('~/pages/posts/[postId]/edit'));
const UserInfo = lazy(async () => import('~/pages/users/[user-name]'));

const root = createRoot(document.getElementById('app')!);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      loader: ({ params }) => params,
      handle: {
        crumb: () => <Link to="/">Home</Link>,
      },
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'posts',
          children: [
            {
              path: ':postId',
              element: <BlogPost />,
            },
            {
              path: ':postId/edit',
              element: <EditPost />,
            },
            {
              path: 'new',
              element: <NewPost />,
            },
          ],
        },
        {
          path: 'users',
          loader: ({ params }) => params,
          handle: {
            crumb: () => <span>Users</span>,
          },
          children: [
            {
              path: ':userName',
              element: <UserInfo />,
              loader: ({ params }) => params,
              handle: {
                crumb: (data) => <span>{data.userName}</span>,
              },
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NoMatch />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

root.render(
  <StrictMode>
    <Suspense fallback={<>loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
