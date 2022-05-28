import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import bootstrap from './bootstrap_custom.scss';

const App = () => {
  const [form, setForm] = useState(false);

  function showForm() {
    setForm(true);
  }

  return (
    <div>
      <Header showForm={showForm} />
      <Outlet />
    </div>
  );
}

export default App;
