import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App.tsx';
import NoMatch from './components/NoMatch.tsx';
import Home from './pages/Home.tsx';
import BlogPost from './pages/BlogPost.tsx';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';

import './index.css';
import './bootstrap_custom.scss';

const root = createRoot(
  document.getElementById('app'),
);

root.render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="posts">
            <Route path=":postId" element={<BlogPost />} />
            <Route path=":postId/edit" element={<EditPost />} />
            <Route path="new" element={<NewPost />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
