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
const UnauthenticatedApp = ({ handleSingIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ login, password }) => handleSingIn({ login, password });

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('login')} />
      <input {...register('haslo', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = ({ login, password }) => {
    axios
      .post('/url', {
        login,
        password,
      })
      .then((res) => console.log(res));
  };

  const login = (data) => {};

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          {user ? (
            <AuthenticatedApp />
          ) : (
            <Route
              path="/"
              element={<UnauthenticatedApp handleSingIn={handleSignIn} />}
            />
          )}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
