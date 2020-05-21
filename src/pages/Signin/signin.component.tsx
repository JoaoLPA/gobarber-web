import React from 'react';
import { FiUserPlus, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input/input.component';
import Button from '../../components/Button/button.component';

import { Container, Content, Background } from './signin.styles';

import logo from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Entrar</Button>
        <a href="lost">Esqueci minha senha</a>
      </form>
      <a href="new" type="button">
        <FiUserPlus />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
