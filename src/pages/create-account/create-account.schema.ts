import { z } from 'zod';

import { ValidatorCPF } from '../../shared/validators/cpf.validator';
import './../../extensions';

export const createAccountFormSchema = z
  .object({
    name: z
      .string()
      .nonempty('Nome obrigatório')
      .transform((name: string) => {
        return name.capitalize();
      }),
    lastname: z
      .string()
      .nonempty('Nome obrigatório')
      .transform((name: string) => {
        return name.capitalize();
      }),
    email: z
      .string()
      .nonempty('Email obrigatório')
      .email('Formato invalido de email')
      .refine(
        async (value: string) => {
          return true;
        },
        {
          message: 'Email já cadastrado',
        },
      ),
    cpf: z
      .string()
      .nonempty('CPF obrigatório')
      .refine(
        (value: string) => {
          return ValidatorCPF(value);
        },
        {
          message: 'CPF inválido',
        },
      ),
    phone: z.string().nonempty('Telefone obrigatório'),
    password: z.string().nonempty('Senha obrigatório').min(6, 'Mínimo de 6 caracteres'),
    confirmPassword: z.string().nonempty('Senha obrigatório').min(6, 'Mínimo de 6 caracteres'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Você deve aceitar os Termos e Condições' }),
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      path: ['confirmPassword'],
      message: 'As senhas não conferem',
    },
  );

export type CreateAccountFormType = z.infer<typeof createAccountFormSchema>;
