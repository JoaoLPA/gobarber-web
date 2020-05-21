import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input/input.component';
import Button from '../../components/Button/button.component';

import { Container, Content, Background } from './signup.styles';

import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

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
