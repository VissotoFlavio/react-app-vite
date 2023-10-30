import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { Toast, ToastProps } from '../../components/toast/toast';
import { ToastWrapper } from '../../components/toast/toast.style';
import { ToastContext } from './toast.context';

const generateID = (): string => {
  const rdnFirst = (Math.random() * 46656) | 0;
  const rndSecond = (Math.random() * 46656) | 0;

  const x = ('000' + rdnFirst.toString(36)).slice(-3);
  const xx = ('000' + rndSecond.toString(36)).slice(-3);
  return x + xx;
};

interface ToastPropsProvider extends ToastProps {
  id: string;
}

export const ToastProvider = ({ children }: { children: JSX.Element }) => {
  const [toasts, setToasts] = useState<ToastPropsProvider[]>([]);

  function open(props: ToastProps): void {
    setToasts((currentToasts: ToastPropsProvider[]) => {
      return [...currentToasts, { id: generateID(), content: props.content, timeout: props.timeout, icon: props.icon }];
    });
  }

  const close = (id: string): void => {
    setToasts((currentToasts: ToastPropsProvider[]) => {
      return currentToasts.filter((toast) => toast.id !== id);
    });
  };

  const contextValue = useMemo(() => ({ open: open, close: close }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <ToastWrapper>
          {toasts.map((x: ToastPropsProvider) => (
            <Toast key={x.id} content={x.content} close={() => close(x.id)} timeout={x.timeout} icon={x.icon}></Toast>
          ))}
        </ToastWrapper>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
