import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthContext';
import { ThemeContext } from '../Providers/ThemeProvider';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../Services/api';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const { fillUserData } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    auth();
  };

  async function auth() {
    validateLogin();

    try {
      const send = await api.post('/auth', {
        username,
        password,
      });

      setTimeout(() => {
        navigate('/home');
      }, 2000);

      toast('Login realizado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
        type: 'success',
        autoClose: 1000,
        theme: 'colored',
        transition: Slide,
      });

      fillUserData({
        token: send.data.token,
      });
    } catch (event) {
      toast('Erro ao fazer login', {
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
        theme: 'colored',
        autoClose: 3000,
        transition: Slide,
      });
    }
  }

  const validateLogin = () => {
    if (username.length <= 6) {
      toast('O nome de usuário deve ter 6 ou mais caracteres', {
        position: toast.POSITION.TOP_CENTER,
        type: 'info',
        autoClose: 1000,
        theme: 'colored',
        transition: Slide,
      });
    }
  };

  return (
    <div 
      className={`text-center card container ${styles.card} ${
        theme === 'navbar-light bg-light' ? `light` : `dark`
      }`}
    >
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Insira seu Usuário"
            name="login"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Insira sua Senha"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button
            disabled={username === '' || password === '' ? true : false}
            className={`type="submit" ${
              theme === 'navbar-light bg-light'
                ? 'btn btn-dark'
                : 'btn btn-light'
            }`}
          >
            Fazer Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
 );
};

export default LoginForm;
