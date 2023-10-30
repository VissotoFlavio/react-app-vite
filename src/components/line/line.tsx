import { FC, HTMLAttributes } from 'react';

import { BoxLine } from './line.style';

export interface LineProps extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
}

export const Line: FC<LineProps> = (props: LineProps) => {
  return (
    <>
      <BoxLine {...props}>{props.title}</BoxLine>
    </>
  );
};
