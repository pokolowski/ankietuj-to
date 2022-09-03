import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';
// import { useError } from 'hooks/useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // const { dispatchError } = useError();
  const handleSetUser = (token) => {
    localStorage.setItem('token', token);
    let decoded = jwt_decode(token);
    console.log({
      id: decoded.Id,
      imie: decoded.Name,
      nazwisko: decoded.Surname,
      email: decoded.Email,
      college: decoded.College,
    });
    setUser({
      id: decoded.Id,
      imie: decoded.Name,
      nazwisko: decoded.Surname,
      email: decoded.Email,
      college: decoded.College,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token != 'null' && token != null) {
      console.log(token);
      handleSetUser(token);
      // let decoded = jwt_decode(token);
      // setUser({
      //   id: decoded.Id,
      //   imie: decoded.Name,
      //   nazwisko: decoded.Surname,
      //   email: decoded.Email,
      // });
      // (async () => {
      //   try {
      //     const response = await axios.get('/me', {
      //       headers: {
      //         authorization: `Bearer ${token}`,
      //       },
      //     });
      //     setUser(response.data);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // })();
    }
  }, []);

  // const navigate = useNavigate();
  const changeUserData = (token) => {
    handleSetUser(token);
  };

  const signIn = async ({ email, password }) => {
    console.log('halo :)');
    console.log(`email: ${email}, passsword: ${password}`);
    try {
      const response = await axios.post('/api/Account/login', {
        email,
        password,
      });
      if (response.data != 'Błędne hasło lub adres email.') {
        handleSetUser(response.data);
        navigate(`/`);
        localStorage.setItem('token', response.data);
      }
    } catch (e) {
      // dispatchError('Invalid email or password');
      // test przekierowania
      // setUser({
      //   imie: 'Patryk',
      //   nazwisko: 'Okolowski',
      //   email: 'pokolowski@edu.cdv.pl',
      //   haslo: 'silneHaslo',
      // });
      // console.log(user);
      // localStorage.setItem('token', user);
      // navigate(`/`);
      // navigate('/Login', {
      // state: { id: 1, name: 'Błędny login lub hasło' },
      // });
      // navigate('/', { state: { err: 'Błędny login lub hasło' } });
      // // koniec testu
      // console.log(e);
    }
  };

  const register = async ({ name, surname, email, password, sex }) => {
    console.log('rejestracja :)');

    console.log({
      name,
      surname,
      email,
      password,
      sex,
    });
    try {
      const response = await axios.post('/api/Account/register', {
        name,
        surname,
        email,
        gender: sex,
        password,
        confirmPassword: password,
      });
      console.log('napierdalaj');
      console.log(response.data);
      // handleSetUser(response.data);
      // setUser(response.data);
      navigate(`/`);
      // localStorage.setItem('token', response.data.token);
      // history.push('/');
    } catch (e) {
      // dispatchError('Invalid email or password');
      console.log(e);
    }
  };

  const signOut = () => {
    console.log('wylogowanie');
    setUser(null);
    localStorage.removeItem('token');
    navigate(`/`);
    console.log('tutaj jeszcze kod dochodziii');
    window.location.reload(false);
  };
  const deleteAccount = () => {
    console.log('usuwaniee');
    setUser(null);
    localStorage.removeItem('token');
    // tutaj post do usuniecia konta

    navigate(`/`);

    // localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, register, deleteAccount, changeUserData }}
    >
      {children}
      {/* {user && <Navigate to="/" replace={true} />} */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
