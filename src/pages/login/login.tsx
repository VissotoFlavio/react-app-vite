import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Form } from '../../components/Forms';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import { ToastContext } from '../../components/toast/toast.context';
import { LocalStorageConstants } from '../../constants/localstorage.constants';
import { AuthContext } from '../../contexts/auth/auth.context';
import { useStorage } from '../../hooks/useStorage';
import { ErrorResponse } from '../../types/response/error.response';
import { LoginFormSchema, LoginFormType } from './login.schema';
import { BoxCreateAccount, BoxPassword, InLineItens, InputPass, LoginCard, LoginContent, LoginForm, ShowPassword } from './login.style';

const LoginViewer = () => {
  const toast = useContext(ToastContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentialsStorage, setCredentialsStorage] = useStorage<LoginFormType>(LocalStorageConstants.user.credentials);

  const loginForm = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    values: {
      email: 'vissoto_flavio@hotmail.com',
      password: '123456',
      rememberpass: true,
    } as LoginFormType,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = loginForm;

  const [enableButtonLogin, setEnableButtonLogin] = useState(true);
  const [buttonLoading, setLoadingButton] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    getStorageCredentials();
  }, []);

  const getStorageCredentials = () => {
    if (credentialsStorage && credentialsStorage.email) {
      loginForm.setValue('email', credentialsStorage.email);
      loginForm.setValue('password', credentialsStorage.password);
      loginForm.setValue('rememberpass', credentialsStorage.rememberpass);
    }
  };

  const createLogin = async (data: LoginFormType) => {
    try {
      setLoadingButton(true);
      setEnableButtonLogin(false);

      const response = await auth.signin(data.email, data.password);

      if (response) {
        toast.open({
          content: 'Login realizado com sucesso! Redirecionando...',
          icon: 'success',
          timeout: 7000,
        });
        setLoadingButton(false);
      }

      if (data.rememberpass) {
        console.log(data);
        setCredentialsStorage(data);
      } else {
        setCredentialsStorage(undefined);
      }
      navigate('/home');
    } catch (err) {
      if (err as ErrorResponse) {
        let message = '';

        if ((err as ErrorResponse).message == 'Unauthorized') {
          message = 'Login/Senha inválidos';
        } else {
          message = `Houve um erro ao criar usuário. ${(err as Error).message}`;
        }

        toast.open({
          content: message,
          icon: 'error',
          timeout: 7000,
        });
      }
      setLoadingButton(false);
      setEnableButtonLogin(true);
    }
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <LoginCard>
        <LoginContent>
          <FormProvider {...loginForm}>
            <LoginForm onSubmit={handleSubmit(createLogin)}>
              <Title>Faça o login da conta</Title>
              <Subtitle>Informe seu email e senha para acessar</Subtitle>

              <Form.FormGroup
                title="Endereço de email"
                labelFor="email"
                error={{ show: errors.email ? true : false, message: errors.email?.message }}>
                <Form.InputText
                  {...register('email', { required: true })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@email.com"></Form.InputText>
              </Form.FormGroup>

              <Form.FormGroup
                title="Senha"
                labelFor="password"
                error={{ show: errors.password ? true : false, message: errors.password?.message }}>
                <InputPass>
                  <Form.InputText
                    {...register('password')}
                    name="password"
                    id="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="*********"></Form.InputText>
                  <ShowPassword>
                    <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
                  </ShowPassword>
                </InputPass>
              </Form.FormGroup>

              <InLineItens>
                <Form.Checkbox id="rememberpass" label="Salvar senha" {...register('rememberpass')}></Form.Checkbox>
                <Form.FormGroup>
                  <BoxPassword>
                    <Form.Link href="#">Esqueceu a senha?</Form.Link>
                  </BoxPassword>
                </Form.FormGroup>
              </InLineItens>

              <Form.FormGroup>
                <Form.Button name="acessar" color="blue" type="submit" showLoading={buttonLoading} enable={enableButtonLogin}>
                  Acessar
                </Form.Button>
              </Form.FormGroup>
            </LoginForm>
          </FormProvider>

          {/* <Line title="Acesse usando" />

          <BoxSocial>
            <Form.Button name="google" color="blue">
              Google +
            </Form.Button>
            <Form.Button name="facebook" color="blue">
              Facebook
            </Form.Button>
            <Form.Button name="twitter" color="blue">
              Twitter
            </Form.Button>
          </BoxSocial> */}

          <BoxCreateAccount>
            Não tem uma conta? <Form.Link href="/create-account">Crie uma conta</Form.Link>
          </BoxCreateAccount>
        </LoginContent>
      </LoginCard>
    </>
  );
};

export default LoginViewer;
