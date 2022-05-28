import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import bootstrap from './bootstrap_custom.scss';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
