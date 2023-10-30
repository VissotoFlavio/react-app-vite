import { FC } from 'react';

import { useTimeout } from '../../hooks/useTimeout';
import { ToastCloseContainer, ToastContainer, ToastIcon, ToastIconClose, ToastIconContainer, ToastTextContainer } from './toast.style';

export interface ToastProps {
  children?: React.ReactNode;
  content: string;
  close?: () => void;
  timeout?: number;
  icon?: 'success' | 'error' | 'alert';
}

export const Toast: FC<ToastProps> = (props: ToastProps) => {
  if (props.close) {
    useTimeout(props.close, props.timeout ?? 3000);
  }

  return (
    <>
      <ToastContainer>
        <ToastIconContainer icon-type={props.icon}>
          <ToastIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {(props.icon == 'success' || !props.icon) && (
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
            )}
            {props.icon == 'alert' && (
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            )}
            {props.icon == 'error' && (
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            )}
          </ToastIcon>
        </ToastIconContainer>
        <ToastTextContainer>{props.content}</ToastTextContainer>
        <ToastCloseContainer onClick={props.close}>
          {/* <span>Close</span> */}
          <ToastIconClose aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </ToastIconClose>
        </ToastCloseContainer>
      </ToastContainer>
    </>
  );
};
