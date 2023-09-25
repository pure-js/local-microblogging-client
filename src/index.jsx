import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import './index.css';

const App = lazy(() => import('@components/App'));
const Home = lazy(() => import('./pages'));
const NoMatch = lazy(() => import('./pages/[all]'));

const NewPost = lazy(() => import('./pages/posts/new'));
const EditPost = lazy(() => import('./pages/posts/[postId]/edit'));
const UserInfo = lazy(() => import('./pages/users/[userName]'));
const BlogPost = lazy(() => import('./pages/posts/[postId]'));

const root = createRoot(document.getElementById('app'));

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
        {
          path: '*',
          element: <NoMatch />,
        },
      ],
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
