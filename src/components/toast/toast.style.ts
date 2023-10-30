import styled from 'styled-components';

import { device } from '../../styles/theme/devices';

interface ToastStyleType {
  'icon-type'?: 'success' | 'error' | 'alert';
}

export const ToastWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  width: auto;
`;

export const ToastContainer = styled.div`
  position: relative;
  margin-bottom: ${(x) => x.theme.size.md};
  display: flex;
  min-width: 18rem;
  align-items: center;
  border-radius: ${(x) => x.theme.size['2xs']};
  background-color: rgb(255 255 255 / 1);
  padding: ${(x) => x.theme.size.md};
  color: ${(x) => x.theme.colors.gray[500]};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (${device.mobileM}) {
    min-width: 20rem;
  }
`;

export const ToastIconContainer = styled.div<ToastStyleType>`
  height: ${(x) => x.theme.size['4xl']};
  width: ${(x) => x.theme.size['4xl']};
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${(x) => x.theme.size['2xs']};

  ${(x) => {
    if (x['icon-type'] == 'alert') {
      return {
        'background-color': x.theme.colors.yellow[100],
        color: x.theme.colors.yellow[500],
      };
    } else if (x['icon-type'] == 'error') {
      return {
        'background-color': x.theme.colors.red[200],
        color: x.theme.colors.yellow[500],
      };
    } else if (x['icon-type'] == 'success') {
      return {
        'background-color': x.theme.colors.green[200],
        color: x.theme.colors.green[500],
      };
    }
  }};

  ${(x) =>
    x['icon-type'] == 'error' && {
      'background-color': x.theme.colors.red[200],
      color: x.theme.colors.red[500],
    }};
`;

export const ToastIcon = styled.svg`
  height: 1rem;
  width: 1rem;
`;

export const ToastIconClose = styled.svg`
  height: 0.75rem;
  width: 0.75rem;
`;

export const ToastTextContainer = styled.div`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
`;

export const ToastCloseContainer = styled.button`
  cursor: pointer;
  background-image: none;
  margin-right: -0.375rem;
  margin-bottom: -0.375rem;
  margin-top: -0.375rem;
  margin-left: auto;
  display: inline-flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: rgb(255 255 255 / 1);
  padding: 0.375rem;
  color: rgb(156 163 175 / 1);
`;
