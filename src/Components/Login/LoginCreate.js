import React from 'react';
import styles from '../../App.css';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault(username);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="usuario" {...username} />
        <Input type="text" label="Email" name="email" {...email} />
        <Input type="password" label="Senha" name="senha" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
