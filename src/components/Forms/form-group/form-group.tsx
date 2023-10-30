import { FC, FormHTMLAttributes } from 'react';

import { FormGroupContainer, FormGroupTitle, MessageError } from './form-group.style';

export interface FormGroupProps extends FormHTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  labelFor?: string;

  error?: {
    message?: string;
    show: boolean;
  };
}

const FormGroup: FC<FormGroupProps> = (props: FormGroupProps) => {
  return (
    <FormGroupContainer>
      <div>
        {props.title && <FormGroupTitle htmlFor={props.labelFor}>{props.title}</FormGroupTitle>}
        {props.children}
      </div>
      {props.error?.show && <MessageError>{props.error.message}</MessageError>}
    </FormGroupContainer>
  );
};

export default FormGroup;
