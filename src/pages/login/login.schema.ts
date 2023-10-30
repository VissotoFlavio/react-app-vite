import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().nonempty('Email obrigatório').email('Formato de email inválido'),
  password: z.string().nonempty('É obrigaório informar a senha').min(6, 'A senha precisa no mínimo 6 caracteres'),
  rememberpass: z.boolean(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
