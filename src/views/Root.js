import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import Login from 'components/organisms/LoginPage/login.js';
import Registry from 'components/organisms/RegistryPage/registry.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  </Router>
);

export default Root;
