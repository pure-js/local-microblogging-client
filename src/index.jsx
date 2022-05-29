import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import NewPost from './pages/NewPost';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  const { worker } = require('./mocks/browser');
  worker.start()
}

const root = createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="posts">
          <Route path=":postId" element={<BlogPost />} />
          <Route path=":postId/edit" element={<NewPost isEdit={true} />} />
          <Route path="new" element={<NewPost />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
