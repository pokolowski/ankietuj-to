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
    let decoded = jwt_decode(token);
    setUser({
      id: decoded.Id,
      imie: decoded.Name,
      nazwisko: decoded.Surname,
      email: decoded.Email,
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
  const signIn = async ({ email, password }) => {
    console.log('halo :)');
    console.log(`email: ${email}, passsword: ${password}`);
    try {
      const response = await axios.post('/api/Account/login', {
        email,
        password,
      });
      handleSetUser(response.data);
      // let decoded = jwt_decode(response.data);
      // console.log(decoded);
      // setUser({
      //   id: decoded.Id,
      //   imie: decoded.Name,
      //   nazwisko: decoded.Surname,
      //   email: decoded.Email,
      // });
      // setUser(response.data);
      navigate(`/`);
      localStorage.setItem('token', response.data);
    } catch (e) {
      // dispatchError('Invalid email or password');
      // test przekierowania
      setUser({
        imie: 'Patryk',
        nazwisko: 'Okolowski',
        email: 'pokolowski@edu.cdv.pl',
        haslo: 'silneHaslo',
      });
      console.log(user);
      localStorage.setItem('token', user);
      navigate(`/`);
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
      // console.log(response.data);
      handleSetUser(response.data);
      // setUser(response.data);
      navigate(`/`);
      localStorage.setItem('token', response.data.token);
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
      value={{ user, signIn, signOut, register, deleteAccount }}
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
