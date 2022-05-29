import { Outlet } from 'react-router-dom';

import Header from './Header';
// eslint-disable-next-line no-unused-vars
import bootstrap from './bootstrap_custom.scss';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
