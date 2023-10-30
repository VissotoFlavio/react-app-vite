import { AES, enc } from 'crypto-js';
import { useEffect, useState } from 'react';

const secret = '@3esdwrs';

const encryptValue = <T>(value: T): string => {
  const strValue = JSON.stringify(value);
  const cipherText = AES.encrypt(strValue, secret);
  return cipherText.toString();
};

const decryptValue = <T>(value: string | null): T | null => {
  if (!value) {
    return null;
  }

  try {
    const bytes = AES.decrypt(value, secret);
    const decrypted = bytes.toString(enc.Utf8);
    return <T>JSON.parse(decrypted);
  } catch (error) {
    return null;
  }
};

const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch (error) {
    console.log('Parsing erro on', { value });
    return undefined;
  }
};

export const useStorage = <T>(
  key: string,
  initialValue: T | undefined = undefined,
): readonly [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [value, setValue] = useState<T | undefined>(() => {
    const valueFromStorage = localStorage.getItem(key);

    if (valueFromStorage) {
      return JSON.parse(valueFromStorage);
    }

    return initialValue;
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  return [value, setValue] as const;
};
