import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/Sign-In';
import Home from '../pages/Home';
import Conversation from '../pages/Conversation';
import Article from '../pages/Article';
import Code from '../pages/Code';
import Settings from '../pages/Settings';

export const routesPath = [
  {
    route: '/',
    element: <Landing />,
  },
  {
    route: '/feed',
    element: <Home />,
  },
  {
    route: '/auth/sign_up',
    element: <SignUp />,
  },
  {
    route: '/auth/sign_in',
    element: <SignIn />,
  },
  {
    route: '/feed/conversation',
    element: <Conversation />,
  },
  {
    route: '/feed/article',
    element: <Article />,
  },
  {
    route: '/feed/code',
    element: <Code />,
  },
  {
    route: '/feed/settings',
    element: <Settings />,
  },
];
