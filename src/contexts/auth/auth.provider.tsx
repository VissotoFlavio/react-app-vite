import { useEffect } from 'react';

import { LocalStorageConstants } from '../../constants/localstorage.constants';
import { useAPIUser } from '../../hooks/useAPIUser';
import { useStorage } from '../../hooks/useStorage';
import { UserTokenResponse } from '../../types/response/user';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [tokenStorage, setTokenStorage] = useStorage<UserTokenResponse>(LocalStorageConstants.user.token);
  const api = useAPIUser();

  useEffect(() => {
    const validateToken = async () => {
      if (tokenStorage) {
        console.log(tokenStorage);
        const data = await api.validadeToken({
          token: tokenStorage.access_token,
        });
        if (!data) {
          setTokenStorage(undefined);
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (email: string, pass: string): Promise<UserTokenResponse | null> => {
    const data = await api.signin({
      email: email,
      pass: pass,
    });

    if (data) {
      setTokenStorage(data);
      return data;
    } else {
      return null;
    }
  };

  const signout = async () => {
    await api.logout();
    setTokenStorage(undefined);
  };

  return <AuthContext.Provider value={{ user: tokenStorage, signin, signout }}>{children}</AuthContext.Provider>;
};
