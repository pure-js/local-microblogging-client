import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App';
import NoMatch from './components/NoMatch.tsx';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost.tsx';
import NewPost from './pages/NewPost';

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
            <Route path=":postId/edit" element={<NewPost isEdit />} />
            <Route path="new" element={<NewPost />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
