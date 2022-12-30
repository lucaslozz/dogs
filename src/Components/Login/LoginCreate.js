import React from 'react';
import { UserContext } from '../../UserContext';
import styles from '../../App.css';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { USER_POST } from '../../api';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    // if (username.validate() && email.validate() && password.validate()) {
    //   userCreate(username.value, email.value, password.value);
    // }

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);

    if (response.ok) userLogin(username.value, password.value);
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
