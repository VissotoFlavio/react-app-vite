import { AnchorHTMLAttributes, FC } from 'react';

import { BoxLink } from './link.style';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const Link: FC<LinkProps> = (props: LinkProps) => {
  return (
    <>
      <BoxLink to={props.href ?? '#'}>{props.children}</BoxLink>
    </>
  );
};
