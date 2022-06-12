import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import {
  StaticRouter,
  Routes,
  Route,
} from 'react-router-dom/server';

import App from './components/App.tsx';
import NoMatch from './components/NoMatch.tsx';
import Home from './pages/Home.tsx';
import BlogPost from './pages/BlogPost.tsx';
import NewPost from './pages/NewPost';

import './index.css';
import './bootstrap_custom.scss';

const root = renderToPipeableStream(
  document.getElementById('app'),
);

root.render(
  <StrictMode>
    <StaticRouter basename={import.meta.env.BASE_URL}>
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
    </StaticRouter>
  </StrictMode>,
);
