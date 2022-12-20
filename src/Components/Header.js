import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar Login</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Header;
