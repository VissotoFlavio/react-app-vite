import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from './auth.context';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    if (window.location.pathname != '/login') {
      return <Navigate to={'/login?redirect=' + window.location.pathname + window.location.search}></Navigate>;
    } else {
      return <Navigate to="/login"></Navigate>;
    }
  }
  return children;
};
