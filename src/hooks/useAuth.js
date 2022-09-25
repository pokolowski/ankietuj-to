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
  const handleSetUser = (token) => {
    localStorage.setItem('token', token);
    let decoded = jwt_decode(token);
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
      handleSetUser(token);
    }
  }, []);

  const changeUserData = (token) => {
    handleSetUser(token);
  };

  const signIn = async ({ email, password }) => {
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
      console.log(e);
    }
  };

  const register = async ({ name, surname, email, password, sex }) => {
    try {
      const response = await axios.post('/api/Account/register', {
        name,
        surname,
        email,
        gender: sex,
        password,
        confirmPassword: password,
      });
      navigate(`/`);
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate(`/`);
    window.location.reload(false);
  };
  const deleteAccount = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate(`/`);
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, register, deleteAccount, changeUserData }}
    >
      {children}
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
