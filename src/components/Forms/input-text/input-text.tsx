import React, { FC, InputHTMLAttributes, useCallback } from 'react';

import CEPMask from '../../../shared/masks/cep.mask';
import CPFMask from '../../../shared/masks/cpf.mask';
import CurrencyMask from '../../../shared/masks/currency.mask';
import PhoneMask from '../../../shared/masks/phone.mask';
import './../../../extensions';
import { BoxInputText } from './input-text.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  children?: React.ReactNode;
  mask?: 'cpf' | 'cep' | 'currency' | 'phone';
  name: string;
  capitalize?: boolean;
  onlyLowerCase?: boolean;
}

const InputText: FC<InputProps> = React.forwardRef((props: InputProps, ref: any) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      switch (props.mask) {
        case 'cep':
          CEPMask(e);
          break;
        case 'cpf':
          CPFMask(e);
          break;
        case 'currency':
          CurrencyMask(e);
          break;
        default:
          break;
      }
    },
    [props.mask],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      switch (props.mask) {
        case 'phone':
          PhoneMask(e);
          break;
        default:
          break;
      }

      if (props.capitalize) {
        e.currentTarget.value = e.currentTarget.value.capitalize();
      }

      if (props.onlyLowerCase) {
        e.currentTarget.value = e.currentTarget.value.toLocaleLowerCase();
      }
    },
    [props.mask],
  );

  return (
    <>
      <BoxInputText type="text" onKeyUp={handleKeyUp} onBlurCapture={handleBlur} ref={ref} {...props}></BoxInputText>
    </>
  );
});

InputText.displayName = 'InputText';

export default InputText;
