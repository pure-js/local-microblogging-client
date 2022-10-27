import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from '@components/App';
import NoMatch from '@components/NoMatch';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import UserInfo from './pages/UserInfo';

import './index.css';

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
    <RouterProvider router={router} />
  </StrictMode>,
);
