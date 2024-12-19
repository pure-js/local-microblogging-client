import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import './index.css';

const App = lazy(() => import('~/app/components/app'));
const Home = lazy(() => import('~/app/pages/index'));
const NoMatch = lazy(() => import('~/app/pages/[all]'));

const NewPost = lazy(() => import('~/app/pages/posts/new'));
const BlogPost = lazy(() => import('~/app/pages/posts/[postId]'));
const EditPost = lazy(() => import('~/app/pages/posts/[postId]/edit'));
const UserInfo = lazy(() => import('~/app/pages/users/[user-name]'));

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
                crumb: (data: { userName: string }) => (
                  <span>{data.userName}</span>
                ),
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
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

root.render(
  <StrictMode>
    <Suspense fallback={<>loading...</>}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Suspense>
  </StrictMode>,
);
