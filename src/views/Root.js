import { React, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import Login from 'components/organisms/LoginPage/login.js';
import Registry from 'components/organisms/RegistryPage/registry.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import { useForm } from 'react-hook-form';

const AuthenticatedApp = () => {
  return <>zalogowano</>;
};
const UnauthenticatedApp = ({ handleSignIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('login')} />
      <input {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async ({ email, password }) => {
    console.log(`email: ${email}, haslo: ${password}`);
    try {
      const response = await axios.post('/url', {
        email,
        password,
      });
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const login = (data) => {};

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/Login"
            element={<Login handleSignIn={handleSignIn} />}
          />
          {/* <Route path="/" element={<HomePage />} /> */}
          {user ? (
            <Route path="/" element={<AuthenticatedApp />} />
          ) : (
            // <Route
            //   path="/"
            //   element={<UnauthenticatedApp handleSingIn={handleSignIn} />}
            // />
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
