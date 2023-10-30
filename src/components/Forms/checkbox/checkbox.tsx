import React, { FC, InputHTMLAttributes } from 'react';

import { BoxCheckbox, CheckboxContainer, Label } from './checkbox.style';

export interface CheckboxPropsType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: FC<CheckboxPropsType> = React.forwardRef<HTMLInputElement, CheckboxPropsType>(
  (props: CheckboxPropsType, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <CheckboxContainer>
        <BoxCheckbox type="checkbox" ref={ref} {...props} />
        <Label htmlFor={props.id}>{props.label}</Label>
      </CheckboxContainer>
    );
  },
);

Checkbox.displayName = 'CheckboxComponent';

export default Checkbox;
