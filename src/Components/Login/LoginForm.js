import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [userName, setUsername] = React.useState('');
  const [passWord, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({ userName, passWord }),
    });
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={passWord}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>;
    </section>
  );
};

export default LoginForm;
