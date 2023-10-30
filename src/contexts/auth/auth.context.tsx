import { createContext } from 'react';

import { UserTokenResponse } from '../../types/response/user';

export type AuthContextType = {
  user: UserTokenResponse | undefined;
  signin: (email: string, pass: string) => Promise<UserTokenResponse | null>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
