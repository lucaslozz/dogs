import React from 'react';
import { UserContext } from '../../UserContext';
import styles from '../../App.css';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="usuario" {...username} />
        <Input type="text" label="Email" name="email" {...email} />
        <Input type="password" label="Senha" name="senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
