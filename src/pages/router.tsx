import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import { RequireAuth } from '../contexts/auth/require-auth';
import CreateAccount from './create-account/create-account';
import Error404 from './error/404';
import Home from './home/home';
import LoginViewer from './login/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '',
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: 'home',
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: 'login',
        element: <LoginViewer />,
      },
      {
        path: 'create-account',
        element: <CreateAccount />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
