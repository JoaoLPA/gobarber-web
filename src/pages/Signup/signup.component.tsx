import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input/input.component';
import Button from '../../components/Button/button.component';

import { Container, Content, Background } from './signup.styles';

import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o seu nome'),
        email: Yup.string()
          .required('Digite o seu melhor email')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'Senha deve ter 6 caracteres'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça o seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="back">
          <FiArrowLeft />
          Voltar
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
