import { createContext } from 'react';

import { ToastProps } from './toast';

export type ToastContextType = {
  open: (props: ToastProps) => void;
  close: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType>(null!);
