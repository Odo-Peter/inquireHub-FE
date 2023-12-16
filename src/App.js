import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { setToken } from './services/conversations';

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/Sign-In';
import Home from './pages/Home';
import Conversation from './pages/Conversation';
import Article from './pages/Article';
import Code from './pages/Code';
import Settings from './pages/Settings';

const App = () => {
  const [user, setUser] = useState(null);

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
        <Route path="/" element={!user ? <Landing /> : <Home />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/sign_in" element={<SignIn />} />
        <Route path="/feed/conversation" element={<Conversation />} />
        <Route path="/feed/article" element={<Article />} />
        <Route path="/feed/code" element={<Code />} />
        <Route path="/feed/settings" element={<Settings />} />
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;
