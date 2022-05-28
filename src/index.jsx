import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App';
import Home from './pages/Home';
import AddPost from './pages/AddPost';

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
        <Route path="add-post" element={<AddPost />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
