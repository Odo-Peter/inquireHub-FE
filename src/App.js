import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { setToken } from './services/conversations';

import { routesPath } from './utils/routesPath';

const App = () => {
  const [, setUser] = useState(null);

  useEffect(() => {
    const currUser = window.localStorage.getItem('currentUser');

    if (currUser) {
      const user = JSON.parse(currUser);
      setUser(user);
      setToken(user?.token);
    }
  }, []);

  return (
    <main className="h-screen max-w-[1440px]">
      <Routes>
        {routesPath.map((path) => (
          <Route key={path.route} path={path.route} element={path.element} />
        ))}
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;
