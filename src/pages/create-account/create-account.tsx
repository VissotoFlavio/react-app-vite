import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Form } from '../../components/Forms';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import { ToastContext } from '../../components/toast/toast.context';
import { useAPIUser } from '../../hooks/useAPIUser';
import { ErrorResponse } from '../../types/response/error.response';
import './../../extensions';
import { CreateAccountFormType, createAccountFormSchema } from './create-account.schema';
import {
  BoxLogin,
  CreateAccountCard,
  CreateAccountContent,
  CreateAccountForm,
  InLineItens,
  InputPass,
  LabelShowPass,
  Terms,
} from './create-account.style';

const CreateAccount = () => {
  const api = useAPIUser();
  const toast = useContext(ToastContext);
  const navigate = useNavigate();

  const createAccountForm = useForm<CreateAccountFormType>({
    resolver: zodResolver(createAccountFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = createAccountForm;

  const [showPass, setShowPass] = useState(false);
  const [enableButtonCreate, setEnableButtonCreate] = useState(true);
  const [buttonLoading, setLoadingButton] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const createAccount = async (data: CreateAccountFormType) => {
    try {
      setEnableButtonCreate(false);
      setLoadingButton(true);
      const response = await api.create({
        cpf: data.cpf.onlyNumber(),
        email: data.email,
        lastname: data.lastname,
        name: data.name,
        pass: data.password,
        phone: data.phone,
      });
      if (!response) {
        toast.open({
          content: `Houve um erro ao criar usuário. Favor tentar novamente`,
          icon: 'error',
        });
        setEnableButtonCreate(true);
        setLoadingButton(false);
      }
      toast.open({
        content: 'Usuário criado com sucesso!',
        icon: 'success',
      });
      navigate('/login');
    } catch (error) {
      if (error as ErrorResponse) {
        toast.open({
          content: `Houve um erro ao criar usuário. ${(error as Error).message}`,
          icon: 'error',
          timeout: 7000,
        });
      }
      setEnableButtonCreate(true);
      setLoadingButton(false);
    }
  };

  return (
    <>
      <CreateAccountCard>
        <CreateAccountContent>
          <FormProvider {...createAccountForm}>
            <CreateAccountForm onSubmit={handleSubmit(createAccount)}>
              <Title>Criar uma conta</Title>
              <Subtitle>Insira seus dados pessoais para criar uma conta</Subtitle>

              <InLineItens>
                <Form.FormGroup title="Nome" labelFor="name" error={{ show: errors.name ? true : false, message: errors.name?.message }}>
                  <Form.InputText
                    {...register('name', { required: true })}
                    name="name"
                    id="name"
                    type="text"
                    capitalize={true}
                    placeholder="Nome"></Form.InputText>
                </Form.FormGroup>
                <Form.FormGroup
                  title="Sobrenome"
                  labelFor="lastname"
                  error={{ show: errors.name ? true : false, message: errors.name?.message }}>
                  <Form.InputText
                    {...register('lastname', { required: true })}
                    name="lastname"
                    id="lastname"
                    type="text"
                    capitalize={true}
                    placeholder="Sobrenome"></Form.InputText>
                </Form.FormGroup>
              </InLineItens>
              <Form.FormGroup title="Email" labelFor="email" error={{ show: errors.email ? true : false, message: errors.email?.message }}>
                <Form.InputText
                  {...register('email', { required: true })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@seuemail.com"></Form.InputText>
              </Form.FormGroup>

              <InLineItens>
                <Form.FormGroup title="CPF" labelFor="cpf" error={{ show: errors.cpf ? true : false, message: errors.cpf?.message }}>
                  <Form.InputText
                    {...register('cpf', { required: true })}
                    name="cpf"
                    id="cpf"
                    type="text"
                    mask="cpf"
                    placeholder="xxx.xxx.xxx-xx"></Form.InputText>
                </Form.FormGroup>
                <Form.FormGroup
                  title="Telefone"
                  labelFor="phone"
                  error={{ show: errors.phone ? true : false, message: errors.phone?.message }}>
                  <Form.InputText
                    {...register('phone', { required: true })}
                    name="phone"
                    id="phone"
                    type="text"
                    mask="phone"
                    placeholder="+xx (xx) xxxxx-xxxx"></Form.InputText>
                </Form.FormGroup>
              </InLineItens>

              <Form.FormGroup
                title="Senha"
                labelFor="pass"
                error={{ show: errors.password ? true : false, message: errors.password?.message }}>
                <InputPass>
                  <Form.InputText
                    {...register('password')}
                    name="password"
                    id="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="*********"></Form.InputText>
                  <LabelShowPass>
                    <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
                  </LabelShowPass>
                </InputPass>
              </Form.FormGroup>

              <Form.FormGroup
                labelFor="confirmPassword"
                error={{ show: errors.confirmPassword ? true : false, message: errors.confirmPassword?.message }}>
                <Form.InputText
                  {...register('confirmPassword')}
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme a senha"></Form.InputText>
              </Form.FormGroup>

              <Form.FormGroup error={{ show: errors.terms ? true : false, message: errors.terms?.message }}>
                <Terms>
                  <Form.Checkbox
                    id="terms"
                    label="Estou ciente e CONCORDO com os termos de aceite e poíticas de privacidade"
                    {...register('terms')}></Form.Checkbox>
                  <Form.Link href="/privacy-policy">Política de Privacidade</Form.Link>
                </Terms>
              </Form.FormGroup>

              <Form.FormGroup>
                <Form.Button name="submit" color="blue" type="submit" showLoading={buttonLoading} enable={enableButtonCreate}>
                  Cadastrar
                </Form.Button>
              </Form.FormGroup>
            </CreateAccountForm>
          </FormProvider>

          <BoxLogin>
            Já tem uma conta? <Form.Link href="/login">Faça o login</Form.Link>
          </BoxLogin>
        </CreateAccountContent>
      </CreateAccountCard>
    </>
  );
};

export default CreateAccount;
