import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

const App = lazy(() => import('@components/App'));
const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('@components/NoMatch'));

const NewPost = lazy(() => import('./pages/NewPost'));
const EditPost = lazy(() => import('./pages/EditPost'));
const UserInfo = lazy(() => import('./pages/UserInfo'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const root = createRoot(
  document.getElementById('app'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        children: [
          {
            path: ':userName',
            element: <UserInfo />,
          },
        ],
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

root.render(
  <StrictMode>
    <Suspense fallback={<>loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
