import React from 'react';
import Header from '../components/organisms/header/header.js';
import HomeSlider from 'components/organisms/HomeSlider/homeSlider.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import MenuLeftPanel from 'components/organisms/menuLeftPanel/menuLeftPanel.js';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <HomeSlider />
    <MenuLeftPanel />
  </ThemeProvider>
);

export default Root;
