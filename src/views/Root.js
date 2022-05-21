import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import Login from 'components/organisms/LoginPage/login.js';
import Registry from 'components/organisms/RegistryPage/registry.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

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
  const [displayOff, setDisplayOff] = useState(false);
  const auth = useAuth();
  let goToChoice = 'login';

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/Login"
          element={
            <Login
              setLoginOrRegister={setDisplayOff}
              LoginOrRegister={displayOff}
            />
          }
        />
        <Route path="/Register" element={<Login />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {auth.user ? (
          <Route
            path="/"
            element={<AuthenticatedApp setLoginOrRegister={setDisplayOff} />}
          />
        ) : (
          // <Route
          //   path="/"
          //   element={<UnauthenticatedApp handleSingIn={handleSignIn} />}
          // />
          <Route
            path="/"
            element={<HomePage setLoginOrRegister={setDisplayOff} />}
          />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default Root;
